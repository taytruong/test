import { useLocation } from "react-router-dom";
import resultData from "../json/assessment.json";
import { FacebookShareButton, FacebookIcon } from "react-share";

const Result = () => {
  const location = useLocation();
  const { score } = location.state;

  const levelData = resultData.results.find(
    (item) => score >= item.range[0] && score <= item.range[1]
  );

  const shareUrl = `${levelData.key_actions_cta.url}`;
  const title = `Kết quả của bạn: ${levelData.key_actions_cta.text} với điểm số ${score}`;

  return (
    <div>
      <div className="flex flex-col gap-5 w-[700px] bg-[#3c6997] p-5 rounded-xl">
        <div className="flex gap-5 items-center">
          <div className="bg-white p-4 rounded-full">
            <img
              src={levelData.icon}
              alt={levelData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 uppercase">
            <p className="text-sm">cấp độ {levelData.level}</p>
            <h1 className="text-xl font-bold">{levelData.name}</h1>
          </div>
        </div>
        <div className="leading-loose">{levelData.description.text}</div>

        <div>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="flex items-center justify-center gap-3"
          >
            <FacebookIcon size={32} round={true} />
            Chia sẻ lên Facebook
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default Result;
