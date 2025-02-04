import {
  IDOBody,
  IDOImageParent,
  IDOLaunchContainer,
  IDOLaunchWrapper,
  IDOList,
  IDOReward,
  IDOTag,
} from "./styled";
import ido_1 from "../../../assets/Dashboard/Launchpad/IDO/ido_1.jpg";
import ido_2 from "../../../assets/Dashboard/Launchpad/IDO/ido_2.jpg";
import ido_3 from "../../../assets/Dashboard/Launchpad/IDO/ido_3.jpg";
import ido_4 from "../../../assets/Dashboard/Launchpad/IDO/ido_4.jpg";
import ido_5 from "../../../assets/Dashboard/Launchpad/IDO/ido_5.jpg";
import ido_6 from "../../../assets/Dashboard/Launchpad/IDO/ido_6.jpg";
import empty from "../../../assets/Dashboard/Stake/stake_empty.svg";
import angel_round from "../../../assets/Dashboard/Launchpad/IDO/angel-round.png";
import seed_round from "../../../assets/Dashboard/Launchpad/IDO/seed-round.png";
import community_round from "../../../assets/Dashboard/Launchpad/IDO/community-round.png";

import { ButtonCommon } from "../../../Layout/styled";
import NoData from "../../../components/Common/Nodata";
import { useNavigate } from "react-router-dom";
import ItemIDO from "./itemIDO";

const IDOLaunch = () => {
  const navigate = useNavigate();
  const handleClaimReward = async () => {
    try {
      navigate("/launchpad/1?ido");
    } catch (error) {
      console.log("view detai", error);
    }
  };
  return (
    <IDOLaunchContainer>
      <IDOLaunchWrapper>
        {IDOData.length > 0 ? (
          <IDOList>
            {IDOData.map((item, index) => {
              return (
                <ItemIDO
                  key={index}
                  data={item}
                  onClaimReward={handleClaimReward}
                />
              );
            })}
          </IDOList>
        ) : (
          <NoData
            title="NO Reward available"
            content="There is no reward available recently. Please wait for the next launch on Kibble."
          />
        )}
      </IDOLaunchWrapper>
    </IDOLaunchContainer>
  );
};

const IDOData = [
  {
    id: 1,
    img: ido_1,
    tag: ["FINISH"],
    title: "bemo",
    describe:
      "Kibble - your premier DeFi Hub on TON, provides all you need for the best trading experience and optimal advances on TON Blockchain",
    rewardPool: "10M stXP",
    round: "Angel Round",
    totalRaise: '500,000',
    banner : angel_round,
    color: '#75AEE3',
    background: '#173D68'
  },
  {
    id: 2,
    img: ido_2,
    tag: ["FINISH"],
    title: "bemo",
    describe:
      "Kibble - your premier DeFi Hub on TON, provides all you need for the best trading experience and optimal advances on TON Blockchain",
    rewardPool: "10M stXP",
    round: "Seed Round",
    totalRaise: '700,000',
    banner : seed_round,
    color: '#B4C6FC',
    background: '#362F78'
  },
  {
    id: 3,
    img: ido_3,
    tag: ["FINISH"],
    title: "bemo",
    describe:
      "Kibble - your premier DeFi Hub on TON, provides all you need for the best trading experience and optimal advances on TON Blockchain",
    rewardPool: "10M stXP",
    round: "Public Round",
    totalRaise: '1,250,000',
    banner : community_round,
    color: '#FFD884',
    background: '#CF8D00'
  },
];

export default IDOLaunch;
