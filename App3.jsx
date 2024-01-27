import OnboardingScreen from "./src/components/OnboardingScreen";
import colors from "./src/constants";
import { useState } from "react";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const [index, setIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const screens = [
    {
      color: colors.yellow,
      sloganText1: "The World's ",
      sloganText2: "first platform",
      description: "Empowering All Your Needs",
      image: require("./src/assets/imgs/boy-11.png"),
    },
    {
      color: colors.red,
      sloganText1: "Live, eat",
      sloganText2: "and shop",
      description: "",
      image: require("./src/assets/imgs/girl.png"),
    },
    {
      color: colors.green,
      sloganText1: "Fatst, reliable",
      sloganText2: "and saves time",
      description: "",
      image: require("./src/assets/imgs/boy-1.png"),
    },
  ];

  function handleSetIndex() {
    if (index == screens.length - 1) {
      setIsLogin(true);
    }
    setIndex(index + 1);
  }

  if (isLogin == true) {
    return <LoginScreen />;
  } else {
    return (
      <OnboardingScreen
        sloganText1={screens[index].sloganText1}
        sloganText2={screens[index].sloganText2}
        description={screens[index].description}
        image={screens[index].image}
        color={screens[index].color}
        index={index}
        onPress={handleSetIndex}
      />
    );
  }
}
