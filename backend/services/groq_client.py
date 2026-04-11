"""
services/groq_client.py
-----------------------
Single shared Groq client factory.
All services import get_groq_client() from here — no duplication.
"""

import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()


def get_groq_client() -> Groq:
    key = os.getenv("GROQ_API_KEY")
    if not key:
        raise ValueError(
            "GROQ_API_KEY not found. Add it to your .env file:\n"
            "  GROQ_API_KEY=gsk_..."
        )
    return Groq(api_key=key)


# Default model used across the app — change once here to affect everything
GROQ_MODEL = "llama-3.3-70b-versatile"
