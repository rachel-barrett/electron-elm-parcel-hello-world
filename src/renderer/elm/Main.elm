module Main exposing (main)

import Browser
import Html exposing (Html)
import Ports

main : Program () Model Msg
main = Browser.element 
  { init = init
  , view = view
  , update = update
  , subscriptions = subscriptions
  }

type Msg = IpcReceived String

type alias Model =
  { message: String
  }

init : () -> (Model, Cmd Msg)
init _ = ({message = ""}, Ports.sendIpc "Who should I say hello from?")

view : Model -> Html Msg
view model = Html.h1 [] [Html.text model.message]

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = case msg of
   IpcReceived message -> ({model | message = message}, Cmd.none)

subscriptions : Model -> Sub Msg
subscriptions _ =
  Ports.receiveIpc IpcReceived




