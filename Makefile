.PHONY: api
redocly:
	npx openapi-generator-cli generate -i docs/bundle.yaml -g typescript-axios -o app/api/generated
