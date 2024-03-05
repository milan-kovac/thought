import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

const Avatar = ({ seed }: any) => {
  const svg = createAvatar(style, { seed });

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Avatar;
