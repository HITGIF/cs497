protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src/proto" \
  src/*.proto
