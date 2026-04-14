// import { useCallback } from "react";
// import { MessageInput } from "stream-chat-react";
// import type { MessageInputProps } from "stream-chat-react";

// export const CustomMessageInput = (props: MessageInputProps) => {
//   const submitHandler: MessageInputProps["overrideSubmitHandler"] = useCallback(
//     async (params: {
//       cid: string;
//       localMessage: LocalMessage;
//       message: Message;
//       sendOptions: SendMessageOptions;
//     }) => {
//       // custom logic goes here
//       await sendMessage({ localMessage, message, options: sendOptions });
//     },
//     [sendMessage],
//   );
//   return (
//     <StreamMessageInput {...props} overrideSubmitHandler={submitHandler} />
//   );
// };