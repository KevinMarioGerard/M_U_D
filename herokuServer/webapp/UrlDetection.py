from string import printable
from keras.preprocessing import sequence
from keras.layers.core import Dropout, Dense
from keras import regularizers
from keras.layers import Input, Embedding, Convolution1D, ELU, MaxPooling1D, LSTM
from keras.models import Model
from keras.optimizers import Adam
from keras.backend import clear_session
import os
os.environ['KMP_DUPLICATE_LIB_OK']='True'

class UrlDetection:
    def lstm_conv(self, max_len=75, emb_dim=32, max_vocab_len=100, lstm_output_size=32, W_reg=regularizers.l2(1e-4)):
        # Input
        main_input = Input(shape=(max_len,), dtype='int32', name='main_input')
        # Embedding layer
        emb = Embedding(input_dim=max_vocab_len, output_dim=emb_dim, input_length=max_len,
                    W_regularizer=W_reg)(main_input) 
        emb = Dropout(0.25)(emb)
        # Conv layer
        conv = Convolution1D(kernel_size=5, filters=256, border_mode='same')(emb)
        conv = ELU()(conv)
        conv = MaxPooling1D(pool_size=4)(conv)
        conv = Dropout(0.5)(conv)
        # LSTM layer
        lstm = LSTM(lstm_output_size)(conv)
        lstm = Dropout(0.5)(lstm)
        # Output layer (last fully connected layer)
        output = Dense(1, activation='sigmoid', name='output')(lstm)
        # Compile model and define optimizer
        model = Model(input=[main_input], output=[output])
        adam = Adam(lr=1e-4, beta_1=0.9, beta_2=0.999, epsilon=1e-08, decay=0.0)
        model.compile(optimizer=adam, loss='binary_crossentropy', metrics=['accuracy'])
        return model

    def detect_url(self, url):
        model = self.lstm_conv()
        model.load_weights('./model/model_convolutional.h5')
        url_int_tokens = [[printable.index(x) + 1 for x in url if x in printable]]
        X = sequence.pad_sequences(url_int_tokens, maxlen=75)
        target_proba = model.predict(X, batch_size=1)
        clear_session()
        if target_proba[0] > 0.5:
            return "malicious"
        else:
            return "benign"