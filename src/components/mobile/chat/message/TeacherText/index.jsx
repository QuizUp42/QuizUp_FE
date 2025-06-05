import BaseTeacherText from "../common/baseTeacherText";

const MessageTeacherText = ({ text }) => {
  return (
    <BaseTeacherText>
      <p className="text-sm text-primary-soft font-semibold">{text}</p>
    </BaseTeacherText>
  );
};

export default MessageTeacherText;
