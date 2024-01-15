
# How to run

1. Install [PrivateGPT]("https://docs.privategpt.dev/installation") - highly recommend using an M1 Mac or better for the single-command experience.
2. Update `server.cors.enabled=true` (or do something less generic) in your PrivateGPT `settings.yaml`, otherwise the UI will throw CORS errors.
3. Run your instance of PrivateGPT: `poetry run python3.11 -m private_gpt` (for Mac anyway)
4. Upload your documents via the UI `http://localhost:8001`
`poetry add whisper` to support audio/video.
`poetry add docx2txt` for files.
5. To start the dev server: `npm i && npm start`.
