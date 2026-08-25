import type { OnboardingPageProps } from "./page_types.ts";
import styles from "./OnboardingPages.module.css";
import homeIndicator from "../assets/shared/ios_home_indicator.svg";
import statusLevels from "../assets/shared/ios_status_levels.svg";
import { BottomWrap } from "../components/BottomWrap";
import { ScreenFrame } from "../components/ScreenFrame";
import { SkipButton } from "../components/SkipButton";
import { TopWrap } from "../components/TopWrap";
import { OnboardingActions } from "../components/OnboardingActions.tsx";
import chooseImage from "../assets/onboarding/onboarding_03_choose_card_image.png";
import matchImage from "../assets/onboarding/onboarding_03_match_card_image.png";
import discoverImage from "../assets/onboarding/onboarding_03_discover_card_image.png";

const features = [
  {
    title: "Choose",
    description: "원하는 공간과 스타일을 골라요",
    imageSrc: chooseImage,
    imageAlt: "카드 선택 오브젝트",
  },
  {
    title: "Match",
    description: "선택한 취향을 분석해요",
    imageSrc: matchImage,
    imageAlt: "취향 분석 오브젝트",
  },
  {
    title: "Discover",
    description: "어울리는 공간과 아이템을 발견해요",
    imageSrc: discoverImage,
    imageAlt: "공간 발견 오브젝트",
  },
] as const;

export function Onboarding03Page({ onNext, onSkip }: OnboardingPageProps) {
  return (
    <ScreenFrame label="온보딩 03" glowVariant="onboarding_03">
      <TopWrap levelsSrc={statusLevels} />

      <div className={`${styles.main_area} ${styles.onboarding_03_main}`}>
        <SkipButton onSkip={onSkip} />

        <div className={styles.onboarding_03_headline}>
          <h1>
            선택하고,<br />
            <span>분석</span>하고,<br />
            추천받아요.
          </h1>
        </div>

        <div
          className={styles.onboarding_03_feature_list}
          aria-label="spacemate 추천 흐름"
        >
          {features.map((feature) => (
            <article
              className={styles.onboarding_03_feature}
              key={feature.title}
            >
              <div className={styles.onboarding_03_feature_text}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>

              <img
                className={styles.onboarding_03_feature_image}
                src={feature.imageSrc}
                alt={feature.imageAlt}
              />
            </article>
          ))}
        </div>

        <OnboardingActions
          currentPage={2}
          variant="split"
          onNext={onNext}
        />
      </div>

      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  );
}