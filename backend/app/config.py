import spacy
import os

class Config:
    DEBUG = False
    SECRET_KEY = 'your_secret_key'
    # Specify the path to your local spaCy model
   

    SPACY_MODEL_PATH = "D:/Anonify-Readact/Anonify/backend/model-best"
    print("Model path exists:", os.path.exists(SPACY_MODEL_PATH))
    print("Contents of the directory:", os.listdir(SPACY_MODEL_PATH) if os.path.exists(SPACY_MODEL_PATH) else "Directory not found")
    UPLOAD_PATH = os.path.abspath(os.path.join(os.getcwd(), './uploads'))
    SAVE_PATH = os.path.abspath(os.path.join(os.getcwd(), './results'))
    
    # Load the spaCy model from the local directory
    SPACY_MODEL = spacy.load(SPACY_MODEL_PATH)