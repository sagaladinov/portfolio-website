"use client";

import { useEffect, useRef, useState } from "react";
import { Html, useLang } from "./LangProvider";
import { PhoneScreens } from "./PhoneScreens";

export function QmetaCase() {
  const { t, list } = useLang();
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Экран телефона переключается, когда шаг доходит до середины экрана
  useEffect(() => {
    const steps = stepsRef.current?.querySelectorAll<HTMLElement>(".step");
    if (!steps || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.step))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section className="stage" id="qmeta" aria-labelledby="qmeta-title">
      <div className="wrap section" style={{ paddingBottom: 0 }}>
        <div className="case-head rv">
          <p className="kicker">{t("q.kicker")}</p>
          <h2 className="h2" id="qmeta-title">{t("q.title")}</h2>
          <p className="lede">{t("q.lede")}</p>
        </div>

        <dl className="tldr rv">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}><dt>{t(`q.t${i}`)}</dt><dd>{t(`q.v${i}`)}</dd></div>
          ))}
        </dl>

        <div className="problem rv">
          <p className="kicker">{t("q.pk")}</p>
          <Html as="h2" className="h2" html={t("q.problem")} />
        </div>

        <div className="scrolly">
          <div className="phone-col" aria-hidden="true">
            <div className="phone-sticky"><PhoneScreens active={active} /></div>
          </div>
          <div className="steps" ref={stepsRef}>
            {[1, 2, 3, 4].map((n, i) => (
              <article key={n} className={i === active ? "step on" : "step"} data-step={i}>
                <p className="n">{t(`s${n}.n`)}</p>
                <h3>{t(`s${n}.h`)}</h3>
                <Html as="p" html={t(`s${n}.p`)} />
              </article>
            ))}
          </div>
        </div>

        <div className="scope">
          {(["a", "b"] as const).map((k) => (
            <div className="scope-card rv" key={k}>
              <h3>{t(`sc.${k}`)}</h3>
              <ul>{list(`sc.${k}l`).map((x, i) => <Html as="li" key={i} html={x} />)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
