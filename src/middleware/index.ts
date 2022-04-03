import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  dataSorceInitialize
} from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression, dataSorceInitialize];