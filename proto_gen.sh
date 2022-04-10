protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src/proto" \
  --ts_proto_opt=esModuleInterop=true \
  --proto_path="." \
  *.proto