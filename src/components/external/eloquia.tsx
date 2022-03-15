import React from 'react';
import { SquareIconProps } from './models';

const EloquiaLogo = (props: SquareIconProps) => {
  const { dimension } = props;

  return (
    <svg width={dimension} height={dimension} viewBox="0 0 81 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Eloquia Logo</title>
      <defs>
        <linearGradient x1="0%" y1="1.22778324%" x2="111.281484%" y2="110.831173%" id="linearGradient-1">
          <stop stop-color="#77797C" offset="0%"></stop>
          <stop stop-color="#0679C4" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Logo---Custom" transform="translate(-10.000000, -10.000000)" fill="url(#linearGradient-1)">
          <path d="M66,75 C61.0054685,75 56.4385377,76.8307764 52.9336815,79.8578554 C57.9448028,79.3719434 62.5944785,77.6529734 66.5762643,75.008447 C66.3850401,75.0027292 66.1928387,75 66,75 Z M50,20 C33.4314575,20 20,33.4314575 20,50 C20,51.5787007 20.1219422,53.1289204 20.3569215,54.6417536 C21.8704667,54.8780095 23.4209872,55 25,55 C41.5685425,55 55,41.5685425 55,25 C55,23.4211154 54.8780294,21.8707185 54.6429964,20.3577178 C53.129546,20.1219915 51.5790193,20 50,20 Z M50.9937424,10.0121029 L51.1799093,10.0170689 L51.395452,10.0238856 L51.395452,10.0238856 L51.497,10.027 L50.9937424,10.0121029 Z M51.563,10.03 L51.513,10.027 L51.6107065,10.0318378 L51.6107065,10.0318378 L51.563,10.03 Z M50.9937424,10.0121029 L51.563,10.03 L52.012958,10.0497702 L52.012958,10.0497702 C52.1153205,10.0548428 52.2178873,10.0603177 52.3203508,10.0661782 C52.4762307,10.0750963 52.6312878,10.0848667 52.7861027,10.0955181 C52.877604,10.1018122 52.969568,10.1084554 53.0614453,10.1154091 C53.2061501,10.1263623 53.35025,10.1380517 53.494132,10.1505028 C53.5912326,10.1589049 53.6885114,10.16768 53.7856891,10.1768028 C53.9249131,10.1898738 54.0636018,10.2036242 54.2020804,10.2180811 C54.3117067,10.2295247 54.4216042,10.2414566 54.5313671,10.2538327 C54.6568099,10.2679774 54.7818479,10.2826744 54.9067082,10.2979466 C55.0180221,10.3115626 55.1289819,10.325608 55.2397991,10.340107 C55.361671,10.3560508 55.4838542,10.3726111 55.6058609,10.3897218 C55.7329323,10.4075428 55.8597961,10.4259585 55.9864656,10.4449681 C56.0764586,10.4584747 56.1658882,10.472208 56.2552196,10.486237 C56.3987562,10.5087773 56.5423699,10.5321365 56.6857247,10.5562583 C56.8270646,10.5800413 56.9681136,10.6045584 57.108907,10.6298123 C57.1906389,10.6444726 57.2721739,10.6593607 57.3536222,10.6744955 C57.5467526,10.7103824 57.7395532,10.7476887 57.9318548,10.7863741 C57.9737872,10.7948094 58.0160232,10.8033771 58.0582349,10.8120113 C58.2375375,10.8486889 58.415964,10.88647 58.5939471,10.9254361 C58.6539186,10.9385653 58.7141623,10.9519012 58.7743547,10.9653727 C58.9452128,11.0036132 59.1154257,11.0428916 59.2852193,11.0832523 C59.3452797,11.0975286 59.4055213,11.111997 59.4657096,11.1266015 C59.6063878,11.1607377 59.7465095,11.1955501 59.8863372,11.2310991 C59.9825952,11.2555702 60.079059,11.2804809 60.1753809,11.3057418 L60.5353214,11.4019451 L60.5353214,11.4019451 L60.8571117,11.4910274 L60.8571117,11.4910274 C61.0105425,11.5342009 61.1628827,11.5780556 61.3148469,11.6227884 C61.3870298,11.6440369 61.4589305,11.6654241 61.5307462,11.6870078 C61.5956854,11.7065236 61.6611792,11.7263911 61.7266016,11.7464218 C62.1141496,11.8650851 62.4986674,11.9892969 62.8805909,12.1191224 C63.1090999,12.7912731 63.3202149,13.471438 63.5134024,14.1590848 C63.5965403,14.4551264 63.6763878,14.7525602 63.7528698,15.0513356 C63.970647,15.9018873 64.1612259,16.7639164 64.323511,17.635873 C64.3286555,17.663664 64.3336514,17.6906641 64.3386201,17.7176737 C64.3750421,17.9154956 64.4101327,18.1147247 64.4437426,18.3144555 C64.4665622,18.4502033 64.4886911,18.5859902 64.5101343,18.7220042 L64.5563132,19.022214 L64.5563132,19.022214 C64.573072,19.1341667 64.5894114,19.2464487 64.6052832,19.3588805 C64.6236696,19.4890036 64.6414265,19.6194365 64.6585529,19.7500675 L64.696231,20.0461202 L64.696231,20.0461202 C64.7138159,20.1883652 64.730646,20.3308921 64.7467246,20.4736462 C64.7517555,20.5184049 64.7567861,20.5637563 64.7617407,20.6091305 C64.7803046,20.7790573 64.7977717,20.9490774 64.8141704,21.1194095 C64.8294533,21.2782225 64.8438283,21.437458 64.8572672,21.5969595 C64.8667533,21.7094903 64.8757481,21.8218963 64.8842771,21.9344323 L64.9006439,22.1587388 L64.9006439,22.1587388 C64.9129163,22.3335805 64.9240364,22.5082992 64.9340311,22.6833191 C64.9387573,22.7661014 64.9432586,22.8494325 64.9475045,22.9328309 C64.9545663,23.0715399 64.9609021,23.2100049 64.9665323,23.3486518 C64.9721244,23.4863418 64.9770359,23.6246892 64.9812431,23.7632136 C64.9837055,23.8442783 64.9859252,23.9253651 64.9879033,24.0065118 C64.9959418,24.335846 65,24.6674491 65,25 C65,47.09139 47.09139,65 25,65 C24.6677846,65 24.3365152,64.99595 24.0062383,64.9878967 C27.7071687,71.3932971 33.7089317,76.3036827 40.8821773,78.5893531 C46.2400306,70.4058825 55.4887096,65 66,65 C69.1785863,65 72.2417141,65.4943363 75.1166978,66.4103233 C78.2046352,61.6958281 80,56.057579 80,50 C80,43.5050427 77.9360122,37.4921557 74.4281568,32.5814589 C74.8049879,30.1092059 75,27.5773767 75,25 C75,22.7753229 74.8547086,20.5845803 74.5730971,18.4367436 C83.9623126,25.7560405 90,37.1729315 90,50 C90,57.7131229 87.8168866,64.9163523 84.034858,71.02549 C86.7541109,73.0728998 89.1128418,75.5724578 91.0006943,78.4120687 L90.9997877,78.622 L90.599179,79.1892019 C88.685021,81.8480765 86.5159432,84.3105729 84.1279798,86.5417448 C82.6849952,83.4537331 80.4761768,80.7953526 77.7458802,78.8108811 C70.5540738,85.7399734 60.7745282,90 50,90 C48.398445,90 46.8188739,89.9058762 45.2665164,89.7228585 C45.2309444,89.7181527 45.1952848,89.7139064 45.1596395,89.7096131 C44.9482832,89.6846174 44.737607,89.6574977 44.5274508,89.6287456 C44.512528,89.6263112 44.4972097,89.6242089 44.4818942,89.6220979 C44.0453523,89.5622458 43.6114363,89.4950258 43.1798835,89.4208917 C43.1004554,89.407033 43.020778,89.3931044 42.941182,89.37894 C42.7890329,89.3520481 42.6373848,89.3241355 42.4860386,89.2953701 C42.422943,89.283225 42.3599711,89.2711035 42.2970519,89.2588343 C41.8736809,89.1763887 41.4525869,89.0870965 41.0339969,88.991237 C40.9728216,88.9771662 40.9111056,88.9628812 40.8494446,88.9484533 C40.7043089,88.9145434 40.5597415,88.8798511 40.4154818,88.8443762 C40.3203491,88.8209433 40.2259651,88.7973662 40.1317145,88.7734542 C40.0124062,88.7432157 39.8925523,88.712209 39.7729176,88.6806621 C39.7070074,88.6632606 39.6415015,88.6458081 39.5760618,88.6281937 L39.5470333,88.6203859 C39.3588941,88.5695878 39.1713043,88.5174516 38.9842747,88.4639882 C38.9043702,88.4411399 38.8243492,88.4179938 38.7444317,88.3946049 C38.5767293,88.3455274 38.4097958,88.295471 38.243325,88.2443575 C38.2262854,88.2391235 38.2089595,88.2337909 38.1916385,88.2284469 C38.0049713,88.1708544 37.819165,88.1120203 37.6339513,88.0518715 C37.5843349,88.0357586 37.5343754,88.0194249 37.4844593,88.0029955 C37.2914416,87.9394633 37.0995181,87.8746555 36.9082531,87.8084373 C36.8956822,87.8040852 36.8827334,87.7995948 36.8697877,87.795098 C23.9614314,83.3110093 14.0595534,72.4013654 10.9925625,58.894961 C10.9764327,58.8225623 10.9602292,58.7503072 10.9442218,58.6779786 C10.9034798,58.4951202 10.8642687,58.3117249 10.8263193,58.1278684 L10.812,58.061 L10.7995357,57.995903 L10.7995357,57.995903 L10.8263193,58.1278684 C10.7853447,57.9293554 10.7458411,57.7303048 10.7078204,57.5307285 C10.695975,57.4676261 10.6841268,57.4046321 10.6724267,57.3415861 C10.6410398,57.1732817 10.61087,57.0045931 10.5817612,56.8355416 C10.5724784,56.7809032 10.5631231,56.7259051 10.5538803,56.6708689 C10.5250575,56.4998782 10.4974942,56.3288809 10.4710185,56.1575245 C10.4613641,56.0944879 10.4516726,56.0307681 10.4421317,55.9669992 C10.412379,55.768587 10.3842579,55.5704013 10.3575948,55.3717536 C10.354226,55.3462525 10.3508901,55.3212239 10.3475774,55.296188 C10.2489396,54.5509982 10.1708282,53.7988123 10.1138468,53.0407322 L10.11,52.993 L10.106,52.946 L10.105,52.931 L10.101,52.863 L10.097247,52.811119 C10.0919292,52.7345217 10.0868271,52.657865 10.0819412,52.5811496 C10.0741698,52.4591352 10.0668981,52.3361491 10.0601834,52.2130147 C10.0529418,52.0802147 10.046364,51.9475732 10.0404339,51.8147631 C10.0368764,51.7350786 10.0335561,51.6554485 10.030469,51.5757586 C10.024562,51.4232794 10.0195088,51.2705829 10.0153137,51.1176721 C10.0141851,51.0765436 10.0131125,51.0351508 10.0121029,50.9937424 C10.004058,50.6641405 10,50.3325441 10,50 C10,27.90861 27.90861,10 50,10 C50.3325784,10 50.6642088,10.0040589 50.9948443,10.0121297 L50.9937424,10.0121029 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  )
};

export default EloquiaLogo;
