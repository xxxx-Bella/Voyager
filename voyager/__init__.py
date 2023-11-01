# from .voyager import Voyager
from voyager import Voyager


# You can also use mc_port instead of azure_login, but azure_login is highly recommended.
azure_login = {
    "client_id": "1f10bb64-dbd3-4743-917b-4d7c552ce66e",
    "redirect_url": "https://127.0.0.1/auth-response",
    "secret_value": "2d68ecd7-7657-4b34-ab3d-444b93981c4c",
    "version": "fabric-loader-0.14.18-1.19",
}
openai_api_key = "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"

voyager = Voyager(
    azure_login=azure_login,
    openai_api_key=openai_api_key,
)

# start lifelong learning
voyager.learn()