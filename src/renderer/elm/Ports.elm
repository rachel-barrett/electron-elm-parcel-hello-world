port module Ports exposing (..)

port sendIpc : String -> Cmd msg
port receiveIpc : (String -> msg) -> Sub msg