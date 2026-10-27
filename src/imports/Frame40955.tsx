import svgPaths from "./svg-2vu9n1ajz8";

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission Summary
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Left />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Section-title">
      <Frame7 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]"></p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Adjustments History</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <SectionTitle />
      <Button />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2d2d2d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Amount (Tax included)
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        659.56
      </p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex items-start pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Price">
      <Price1 />
      <Price2 />
    </div>
  );
}

function WalletBalance() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title />
      <Price />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[19.72%] right-0 top-[7.9%] w-[17.184px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.184 54.2837">
        <g id="Group">
          <path d={svgPaths.p3feaaa80} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 right-[19.24px] top-0 w-[54.316px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.3159 75">
        <g id="Group">
          <path d={svgPaths.p34444200} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[11.51%] right-[53.7px] top-1/2 w-[16.305px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3055 28.8656">
        <g id="Group">
          <path d={svgPaths.p34b60500} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[4.82%] right-[3.71px] top-[54.51%] w-[43.697px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.697 30.5042">
        <g id="Group">
          <path d={svgPaths.p1809f100} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[57.02%] right-[3.98px] top-[4.84%] w-[64.224px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2235 28.6078">
        <g id="Group">
          <path d={svgPaths.p1a705600} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[17.38%] right-[29.88px] top-[30.08%] w-[30.893px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8926 39.4051">
        <g id="Group">
          <path d={svgPaths.p3075b000} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[25.94%] right-[12.77px] top-[32.03%] w-[8.412px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.41201 31.5224">
        <g id="Group">
          <path d={svgPaths.p1cd6cbf0} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[74.56%] right-[21.84px] top-[17.38%] w-[28.347px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3471 6.04316">
        <g id="Group">
          <path d={svgPaths.p2fff3700} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[22.98%] right-[17.62px] top-[57.03%] w-[28.433px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4328 14.9965">
        <g id="Group">
          <path d={svgPaths.pf20ae00} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[30.88%] right-[16.89px] top-[22.98%] w-[39.75px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7503 34.5986">
        <g id="Group">
          <path d={svgPaths.p63178c0} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-[33.19%] right-[24.4px] top-[33.19%] w-[24.726px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7261 25.2127">
        <g id="Group">
          <path d={svgPaths.p3f29c90} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[41.64%] right-[30.64px] top-[41.65%] w-[12.286px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2859 12.532">
        <g id="Group">
          <path d={svgPaths.p13db9780} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Spiral() {
  return (
    <div className="absolute bottom-[-2.11%] contents right-[0.45px] top-[-3.52%]" data-name="Spiral 2">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p11633680} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p842df00} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute bottom-0 contents right-0 top-[74.71%]" data-name="Group">
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p3cce700} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p3d7e0800} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-[9.89%] contents right-0 top-[64.82%]" data-name="Group">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p842df00} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p1093af80} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[19.77%] contents right-0 top-[54.94%]" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p12d65350} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p12d65350} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute bottom-[29.66%] contents right-0 top-[45.05%]" data-name="Group">
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p565e670} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p43d5500} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute bottom-[39.55%] contents right-0 top-[35.16%]" data-name="Group">
      <Group27 />
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p1093af80} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p171c2f00} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute bottom-[49.43%] contents right-0 top-[25.28%]" data-name="Group">
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute bottom-0 right-0 top-[7.86%] w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18548">
        <g id="Group">
          <path d={svgPaths.p842df00} fill="var(--fill-0, #F18800)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[7.86%] right-0 top-0 w-[22.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5355 7.18553">
        <g id="Group">
          <path d={svgPaths.p134e4600} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[59.32%] contents right-0 top-[15.39%]" data-name="Group">
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[22.534px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5338 9.49062">
        <g id="Group">
          <path d={svgPaths.p18747180} fill="var(--fill-0, #F7D23A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute bottom-[7.74%] right-[1.75px] top-[7.76%] w-[19.041px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0415 8.01972">
        <g id="Group">
          <path d={svgPaths.p1e2ad700} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[15.52%] right-[3.51px] top-[15.54%] w-[15.535px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5354 6.54305">
        <g id="Group">
          <path d={svgPaths.pcc93080} fill="var(--fill-0, #F7D23A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[9.706px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.70629 4.08315">
        <g id="Group">
          <path d={svgPaths.p238f9100} fill="var(--fill-0, #F4AF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[28.37%] contents right-[6.43px] top-[28.61%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute bottom-[69.22%] contents right-0 top-0" data-name="Group">
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-[30.51%] contents right-[26.28px] top-[26.06%]" data-name="Group">
      <Group14 />
      <Group17 />
      <Group20 />
      <Group23 />
      <Group26 />
      <Group29 />
      <Group32 />
      <Group35 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[-2.11%] contents right-[0.45px] top-[-3.52%]">
      <Spiral />
      <Group13 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <WalletBalance />
          <Group8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-[19.72%] contents right-0 top-[7.9%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[17.184px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.184 54.2837">
          <path d={svgPaths.p366d380} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute bottom-0 contents right-[19.24px] top-0" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[54.316px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.3159 75">
          <path d={svgPaths.p4faf980} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute bottom-[11.51%] contents right-[53.69px] top-1/2" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[16.305px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3055 28.8656">
          <path d={svgPaths.p1a32bd80} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute bottom-[4.82%] contents right-[3.71px] top-[54.51%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[43.697px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.697 30.5042">
          <path d={svgPaths.p13448000} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute bottom-[57.02%] contents right-[3.98px] top-[4.84%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[64.223px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2234 28.6078">
          <path d={svgPaths.p3cee6d00} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute bottom-[17.38%] contents right-[29.88px] top-[30.08%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[30.893px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8926 39.4051">
          <path d={svgPaths.p9ad7b00} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute bottom-[25.94%] contents right-[12.78px] top-[32.03%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[8.412px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.412 31.5224">
          <path d={svgPaths.p389d3f00} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute bottom-[74.56%] contents right-[21.84px] top-[17.38%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[28.347px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3471 6.04316">
          <path d={svgPaths.p2e5b26f0} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute bottom-[22.98%] contents right-[17.63px] top-[57.03%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[28.433px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4328 14.9965">
          <path d={svgPaths.p10ead380} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute bottom-[30.88%] contents right-[16.9px] top-[22.98%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[39.75px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7502 34.5986">
          <path d={svgPaths.p3891f280} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute bottom-[33.19%] contents right-[24.41px] top-[33.19%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[24.726px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7261 25.2127">
          <path d={svgPaths.p2ca06680} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute bottom-[41.64%] contents right-[30.64px] top-[41.65%]" data-name="Group">
      <div className="absolute bottom-0 right-0 top-0 w-[12.286px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2859 12.532">
          <path d={svgPaths.p3eb20880} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Spiral1() {
  return (
    <div className="absolute bottom-[-1.39%] contents right-[1.12px] top-[-2.78%]" data-name="Spiral 2">
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[28.66%_12.16%_11.96%_17.25%]" data-name="Group">
      <div className="absolute inset-[28.69%_12.16%_11.96%_17.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8921 20.7741">
          <path d={svgPaths.p10434a00} fill="var(--fill-0, #A5C3DC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.77%_30.8%_30.72%_31.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2347 13.1295">
          <path d={svgPaths.p7ea6580} fill="var(--fill-0, #A5C3DC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[28.66%_52.68%_52.59%_28.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61189 6.5625">
          <path d={svgPaths.p1db58f00} fill="var(--fill-0, #A5C3DC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.66%_27.68%_27.59%_53.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61189 6.5625">
          <path d={svgPaths.p29bd5900} fill="var(--fill-0, #A5C3DC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Coupon() {
  return (
    <div className="absolute bottom-[27.89%] overflow-clip right-[20.58px] top-[23.5%] w-[35.263px]" data-name="coupon_9891679 1">
      <div className="absolute inset-[3.13%_3.12%_3.13%_3.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0594 32.8125">
          <path d={svgPaths.p21d27900} fill="var(--fill-0, #FAA037)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.56%_2.74%_2.54%_8.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2569 25.8656">
          <path d={svgPaths.p25f55880} fill="var(--fill-0, #F5732D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4475 26.25">
          <path d={svgPaths.p181a5e80} fill="var(--fill-0, #E6E6EB)" id="Vector" />
        </svg>
      </div>
      <Group54 />
      <div className="absolute inset-[31.24%_31.24%_31.25%_31.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2347 13.1295">
          <path d={svgPaths.p2f8c81c0} fill="var(--fill-0, #463C4B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[28.13%_53.12%_53.12%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61189 6.5625">
          <path d={svgPaths.p32376460} fill="var(--fill-0, #463C4B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.13%_28.12%_28.12%_53.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61189 6.5625">
          <path d={svgPaths.p1fe3e400} fill="var(--fill-0, #463C4B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.81%_31.23%_31.23%_31.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.234 12.5845">
          <path d={svgPaths.p34e26f80} fill="var(--fill-0, #32283C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.94%_53.08%_53.13%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.62858 3.82812">
          <path d={svgPaths.p3d2ac2f0} fill="var(--fill-0, #32283C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.94%_28.08%_28.13%_53.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.62858 3.82812">
          <path d={svgPaths.pd122300} fill="var(--fill-0, #32283C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute bottom-[-1.39%] contents right-[1.12px] top-[-2.78%]">
      <Spiral1 />
      <Coupon />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2d2d2d] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tax Amount
      </p>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        300.56
      </p>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex items-start pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Price">
      <Price4 />
      <Price5 />
    </div>
  );
}

function WalletBalance1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title1 />
      <Price3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Group41 />
          <WalletBalance1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Balances1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px opacity-98 relative" data-name="Balances">
      <Card />
      <Card1 />
    </div>
  );
}

function Balances() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-98 relative shrink-0 w-full" data-name="Balances">
      <Balances1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Balances />
    </div>
  );
}

function TableStatus() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[3.6px] h-full items-center justify-center px-[8px] py-[2px] relative rounded-[49px] shrink-0" data-name="Table Status">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3b82f6] text-[10px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-[1.2] relative shrink-0 text-[#b56d00] text-[10px]" data-name="Container">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caretaker
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        20%
      </p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[21.75px] shrink-0" data-name="Textfield">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit]">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#fdead7] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[21.75px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <TableStatus />
      </div>
      <Textfield />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container2 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Hamza Tarakhan</p>
      </div>
    </div>
  );
}

function TableStatus1() {
  return (
    <div className="bg-[rgba(73,209,111,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[9.6px] shrink-0" data-name="Table Status">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#49d16f] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Included
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <Container1 />
      <TableStatus1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Target</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative w-full">
      <Frame13 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">$100,800.00</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Component 3">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[8px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Achievement</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#49d16f] text-[12px]"></p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#49d16f] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        90%
      </p>
    </div>
  );
}

function Achievements() {
  return (
    <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
      <Icon />
      <Icon1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <Frame14 />
      <Achievements />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-[49px] min-h-px min-w-px relative rounded-[4px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[8px] relative size-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0 w-[1080px]">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame15 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Component />
      </div>
      <Component1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame3 />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <Frame18 />
      <SectionBody />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Activities`}</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text1 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Left1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] relative rounded-[4px] shrink-0 text-[14px] text-white whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="leading-[normal]"></p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Export</p>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Frame8 />
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Member Code
      </p>
      <Icon2 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reference Number
      </p>
      <Icon3 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader4 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>{`Activity Type `}</p>
      <Icon4 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader6 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Subscriber Number
      </p>
      <Icon5 />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader8 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Activity Amount
      </p>
      <Icon6 />
    </div>
  );
}

function TableHeader9() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader10 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Date
      </p>
      <Icon7 />
    </div>
  );
}

function TableHeader11() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader12 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission Amount
      </p>
      <Icon8 />
    </div>
  );
}

function TableHeader13() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader14 />
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Table-header">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader1 />
      <TableHeader3 />
      <TableHeader5 />
      <TableHeader7 />
      <TableHeader9 />
      <TableHeader11 />
      <TableHeader13 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Code `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ACCT-67891
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            6597477
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`150 OMR	`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            10/8/2025
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            45,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Code `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ACCT-67892
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            6597477
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`300 OMR	`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            10/8/2025
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            90,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Code `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ACCT-67893
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            6597477
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`250 OMR	`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            10/8/2025
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            75,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Code `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ACCT-67894
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            6597477
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`400 OMR	`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            10/8/2025
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            120,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function SubscriptionDetails() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-[1080px]" data-name="Subscription details">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader />
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <SubscriptionDetails />
      </div>
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SectionTitle1 />
      <SectionBody1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Revenue Data
      </p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Revenue data used for commission calculation
      </p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text3 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <Left2 />
      <Left3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Refresh</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] relative rounded-[4px] shrink-0 text-[14px] text-white whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="leading-[normal]"></p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Export</p>
      </div>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Frame9 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Segmented() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Model Name
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Model Name
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Model Name
          </p>
        </div>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#edf1f5] relative rounded-[4px] shrink-0 w-full" data-name="Segmented control">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center p-[4px] relative w-full">
          <Segmented />
          <Segmented1 />
          <Segmented2 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Staff ID
      </p>
      <Icon9 />
    </div>
  );
}

function TableHeader16() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader17 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableHeader19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Revenue
      </p>
      <Icon10 />
    </div>
  );
}

function TableHeader18() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader19 />
        </div>
      </div>
    </div>
  );
}

function TableHeader15() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Table-header">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader16 />
      <TableHeader18 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            5873699
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            58,400.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            5873700
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            92,750.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            5873701
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            45,200.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell32 />
      <TableCell33 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            5873702
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            67,500.00
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function SubscriptionDetails1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Subscription details">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader15 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function SectionBody2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <SegmentedControl />
        <SubscriptionDetails1 />
      </div>
    </div>
  );
}

function ContentSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SectionTitle2 />
      <SectionBody2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
      <ContentSection />
      <ContentSection1 />
      <ContentSection2 />
    </div>
  );
}