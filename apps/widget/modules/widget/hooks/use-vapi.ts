import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";

interface TranscriptMessage {
    role: "user" | "assistant";
    text: string;
}

type VapiState = {
    isConnected: boolean;
    isConnecting: boolean;
    isSpeaking: boolean;
}

const vapiStatusInitialState = {
    isConnected: false,
    isConnecting: false,
    isSpeaking: false
}

export const useVapi = () => {
    const [vapi, _] = useState<Vapi | null>(() => new Vapi("017a1539-f35b-4a43-826f-c865b013de51"));

    const [vapiStatus, setVapiStatus] = useState<VapiState>(vapiStatusInitialState);


    const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);


    useEffect(() => {
        if (vapi) {
            handleVapiEvents(vapi)
        }

        return () => {
            vapi?.stop();
        }
    }, [vapi]);

    function handleVapiEvents(vapi: Vapi) {
        vapi.on("call-start", () => {
            setVapiStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isConnected: true,
                    isConnecting: true,
                }
            });

            setTranscript([])
        });

        vapi.on("call-end", () => {
            setVapiStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isConnected: false,
                    isConnecting: false,
                    isSpeaking: false
                }
            })
        });

        vapi.on("speech-start", () => setVapiStatus((prev) => {
            return { ...prev, isSpeaking: true }
        }));

        vapi.on("speech-end", () => setVapiStatus((prev) => {
            return { ...prev, isSpeaking: false }
        }));

        vapi.on("error", (error) => {
            console.log(error, "VAPI_ERROR");
            setVapiStatus((prevStatus) => {
                return {
                    ...prevStatus,
                    isConnecting: false,
                }
            })
        });

        vapi.on("message", (message) => {
            if (message.type === "transcript" && message.transcriptType == "final") {
                setTranscript(prev => [
                    ...prev,
                    {
                        role: message.role === 'user' ? "user" : "assistant",
                        text: message.transcript
                    }
                ])
            }
        });
    }


    const startCall = function () {
        setVapiStatus(prev => {
            return {
                ...prev,
                isConnecting: true
            }
        });

        if (vapi) vapi.start("904eaf1d-1c0f-4607-a74f-96984dbc6a71")
    };


    const endCall = function () {
        if (vapi) vapi.stop()
    }

    return {
        isSpeaking: vapiStatus.isSpeaking,
        isConnecting: vapiStatus.isConnecting,
        isConnected: vapiStatus.isConnected,
        transcript,
        startCall,
        endCall
    }
}; 