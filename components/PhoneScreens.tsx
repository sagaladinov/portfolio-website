"use client";

import { useLang } from "./LangProvider";

const QR_BITS = [1,1,1,0,1,1,1, 1,0,1,0,1,0,1, 1,1,1,0,1,1,1, 0,1,0,1,0,1,0, 1,1,1,0,0,1,1, 1,0,1,1,0,1,0, 1,1,1,0,1,0,1];

/** Четыре экрана телефона qmeta. Показывается экран с индексом active. */
export function PhoneScreens({ active }: { active: number }) {
  const { t } = useLang();
  const cls = (i: number) => (i === active ? "scr on" : "scr");

  return (
    <div className="phone">
      <div className="screen">
        {/* 1 — PIN */}
        <div className={cls(0)}>
          <p className="t">qmeta</p>
          <p className="T">{t("ph.pin")}</p>
          <div className="dots"><i className="f" /><i className="f" /><i className="f" /><i /></div>
          <p className="linked"><b>●</b><span>{t("ph.linked")}</span></p>
          <div className="keys">
            {["1","2","3","4","5","6","7","8","9","","0","⌫"].map((k, i) => (
              <span key={i} className={k === "" || k === "⌫" ? "x" : undefined}>{k}</span>
            ))}
          </div>
        </div>

        {/* 2 — Карта мерчантов */}
        <div className={cls(1)}>
          <div className="map">
            <div className="road" style={{ left: 0, right: 0, top: "38%", height: 10 }} />
            <div className="road" style={{ top: 0, bottom: 0, left: "58%", width: 10 }} />
            <div className="road" style={{ left: 0, right: "30%", top: "66%", height: 7, transform: "rotate(-12deg)" }} />
            {[[30,30],[66,48],[44,58]].map(([l,tp], i) => <div key={i} className="pin" style={{ left: `${l}%`, top: `${tp}%` }} />)}
            {[[18,52],[76,26],[36,44]].map(([l,tp], i) => <div key={i} className="pin dim" style={{ left: `${l}%`, top: `${tp}%` }} />)}
          </div>
          <div className="search">{t("ph.search")}</div>
          <div className="chips"><span className="on">{t("ph.c1")}</span><span>{t("ph.c2")}</span><span>{t("ph.c3")}</span></div>
          <div className="sheet"><b>{t("ph.m")}</b><small>{t("ph.md")}</small><br /><span className="cb">{t("ph.cb")}</span></div>
        </div>

        {/* 3 — QR */}
        <div className={cls(2)}>
          <p className="T">{t("ph.qr")}</p>
          <div className="frame">
            <i /><i /><i /><i />
            <div className="qr">{QR_BITS.map((b, i) => <b key={i} className={b ? undefined : "o"} />)}</div>
            <div className="scanline" />
          </div>
          <div className="tlv">
            00 02 <em>01</em> · Payload Format<br />
            26 .. <em>Merchant Account</em><br />
            52 04 <em>5814</em> · MCC<br />
            54 05 <em>1500</em> · Amount KZT
          </div>
        </div>

        {/* 4 — Лутбокс */}
        <div className={cls(3)}>
          <p className="t">{t("ph.ach")}</p>
          <p className="T">{t("ph.box")}</p>
          <div className="box" />
          <div className="chain">
            <div><i>✓</i><span>{t("ph.l1")}</span><small className="num">5 000 ₸</small></div>
            <div><i>✓</i><span>{t("ph.l2")}</span><small className="num">10 000 ₸</small></div>
            <div><i>✓</i><span>{t("ph.l3")}</span><small className="num">MCC 5814</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}
