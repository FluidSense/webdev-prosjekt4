const sin =(x)=> Math.sin(x);
const π = Math.PI;
const sqr = (x) => Math.sqrt(x);
const sgn = (x) => Math.sign(x);
const θ =(x,y)=> Math.atan2(x,y);

const x = (t) => ((-58/7 *sin(14/9 - 16 *t) - 61/11 *sin(14/9 - 12 *t) - 43/8 *sin(3/2 - 10 *t) - 108/7 *sin(11/7 - 8 *t) - 193/9 *sin(14/9 - 6 *t) - 53/4 *sin(4/3 - 5 *t) + 18741/4 *sin(t + 11/7) + 356/5 *sin(2 *t + 47/10) + 359/5 *sin(3 *t + 11/7) + 659/47 *sin(4 *t + 33/7) + 237/7 *sin(7 *t + 11/7) + 445/7 *sin(9 *t + 8/5) + 147/5 *sin(11 *t + 8/5) + 13/2 *sin(13 *t + 3/2) + 14/9 *sin(14 *t + 9/7) + 3/4 *sin(15 *t + 3/5) - 3448/7) *θ(75**π - t) *θ(t - 71 *π) + (18175/9 *sin(t + 11/7) + 35/3 *sin(2 *t + 14/9) + 1195/6 *sin(3 *t + 11/7) + 199/22 *sin(4 *t + 11/7) + 16851/7) *θ(71 *π - t) *θ(t - 67 *π) + (-27/5 *sin(14/9 - 8 *t) - 23/3 *sin(17/11 - 6 *t) - 39/5 *sin(14/9 - 4 *t) + 12163/6 *sin(t + 11/7) + 89/5 *sin(2 *t + 11/7) + 595/3 *sin(3 *t + 11/7) + 367/5 *sin(5 *t + 11/7) + 116/3 *sin(7 *t + 11/7) - 19148/5) *θ(67 *π - t) *θ(t - 63 *π) + (-881/7 *sin(14/9 - 16 *t) - 277/4 *sin(14/9 - 12 *t) - 117 *sin(11/7 - 11 *t) - 166 *sin(11/7 - 10 *t) - 624/7 *sin(11/7 - 9 *t) - 713/5 *sin(11/7 - 4 *t) - 353/5 *sin(11/7 - 3 *t) - 13/5 *sin(11/7 - 2 *t) + 199/4 *sin(t + 11/7) + 18/5 *sin(5 *t + 37/8) + 437/10 *sin(6 *t + 8/5) + 155/12 *sin(7 *t + 5/3) + 23/12 *sin(8 *t + 13/6) + 121/8 *sin(13 *t + 14/3) + 760/9 *sin(14 *t + 8/5) + 75/4 *sin(15 *t + 14/9) + 797/7 *sin(17 *t + 8/5) - 5461/8) *θ(63 *π - t) *θ(t - 59 *π) + (-81/2 *sin(3/2 - 6 *t) - 209/16 *sin(13/14 - 4 *t) - 103/5 *sin(9/8 - 2 *t) + 24415/7 *sin(t + 11/7) + 1571/3 *sin(3 *t + 11/7) + 463/4 *sin(5 *t + 11/7) + 428/7 *sin(7 *t + 11/7) + 172/9 *sin(8 *t + 11/8) + 95/3 *sin(9 *t + 3/2) + 284/7 *sin(10 *t + 37/8) - 10097/33) *θ(59 *π - t) *θ(t - 55 *π) + (-172/3 *sin(11/7 - 13 *t) - 807/7 *sin(11/7 - 9 *t) + 864/5 *sin(t + 11/7) + 6045/7 *sin(2 *t + 11/7) + 136/3 *sin(3 *t + 14/9) + 25/6 *sin(4 *t + 30/7) + 657/8 *sin(5 *t + 11/7) + 8218/33 *sin(6 *t + 11/7) + 617/5 *sin(7 *t + 33/7) + 199/2 *sin(8 *t + 11/7) + 7744/29 *sin(10 *t + 11/7) + 235/4 *sin(11 *t + 14/9) + 335/6 *sin(12 *t + 33/7) + 683/5 *sin(14 *t + 33/7) + 42 *sin(15 *t + 11/7) + 285/8 *sin(16 *t + 11/7) + 280/31 *sin(17 *t + 47/10) + 427/4 *sin(18 *t + 11/7) + 282/5 *sin(19 *t + 11/7) + 32/5 *sin(20 *t + 14/3) + 17 *sin(21 *t + 11/7) - 2441/4) *θ(55 *π - t) *θ(t - 51 *π) + (-173/3 *sin(20/13 - 8 *t) - 80/3 *sin(2/5 - 4 *t) + 5601/5 *sin(t + 11/7) + 173/8 *sin(2 *t + 3/4) + 1608/7 *sin(3 *t + 19/13) + 372/5 *sin(5 *t + 9/7) + 155/7 *sin(6 *t + 3/4) + 361/4 *sin(7 *t + 3/2) + 1373/28 *sin(9 *t + 14/3) + 122/5 *sin(10 *t + 35/8) + 179/10 *sin(11 *t + 29/7) + 147/10 *sin(12 *t + 12/5) + 53/4 *sin(13 *t + 13/6) + 83/5 *sin(14 *t + 17/10) - 5417/8) *θ(51 *π - t) *θ(t - 47 *π) + (-249/10 *sin(13/9 - 6 *t) - 2573/7 *sin(11/7 - 4 *t) - 76/3 *sin(14/9 - t) + 2069/4 *sin(2 *t + 11/7) + 6079/9 *sin(3 *t + 11/7) + 1049/9 *sin(5 *t + 11/7) + 2623/46 *sin(7 *t + 8/5) + 39/2 *sin(8 *t + 3/2) + 79/2 *sin(9 *t + 14/3) + 91/5 *sin(10 *t + 33/7) + 99/4 *sin(11 *t + 8/5) + 30058/9) *θ(47 *π - t) *θ(t - 43 *π) + (-535/17 *sin(14/9 - 10 *t) - 1566/7 *sin(11/7 - 4 *t) + 1435/8 *sin(t + 8/5) + 2383/9 *sin(2 *t + 8/5) + 2861/5 *sin(3 *t + 8/5) + 145/3 *sin(5 *t + 11/7) + 297/7 *sin(6 *t + 8/5) + 26/5 *sin(7 *t + 25/6) + 791/10 *sin(8 *t + 13/8) + 51/5 *sin(9 *t + 32/7) + 265/6 *sin(11 *t + 8/5) + 20/3 *sin(12 *t + 9/2) - 31695/7) *θ(43 *π - t) *θ(t - 39 *π) + (-151/7 *sin(6/7 - 7 *t) + 7955/2 *sin(t + 5/3) + 411/8 *sin(2 *t + 1/9) + 4576/15 *sin(3 *t + 11/6) + 107/5 *sin(4 *t + 17/5) + 110/9 *sin(5 *t + 63/31) + 55/9 *sin(6 *t + 18/5) - 4994/7) *θ(39 *π - t) *θ(t - 35 *π) + (3476/5 *sin(t + 4/3) + 433/5 *sin(2 *t + 25/6) + 579/7 *sin(3 *t + 5/3) + 113/5 *sin(4 *t + 23/5) + 6084/5) *θ(35 *π - t) *θ(t - 31 *π) + (-619/7 *sin(9/7 - 3 *t) + 802 *sin(t + 37/8) + 421/5 *sin(2 *t + 11/7) - 23264/9) *θ(31 *π - t) *θ(t - 27 *π) + (-71/4 *sin(7/9 - 9 *t) - 289/9 *sin(6/7 - 8 *t) - 922/3 *sin(1/10 - 3 *t) - 3601/36 *sin(5/4 - 2 *t) + 30703/7 *sin(t + 1) + 706/9 *sin(4 *t + 5/6) + 265/14 *sin(5 *t + 11/5) + 278/9 *sin(6 *t + 1/8) + 341/10 *sin(7 *t + 4/5) - 605) *θ(27 *π - t) *θ(t - 23 *π) + (10764/7 *sin(t + 40/9) + 519/4 *sin(2 *t + 28/11) + 707/4 *sin(3 *t + 27/7) + 685/14 *sin(4 *t + 21/10) + 355/7 *sin(5 *t + 11/3) + 128/3 *sin(6 *t + 7/5) + 96/5 *sin(7 *t + 29/9) + 272/9 *sin(8 *t + 18/17) + 71/8 *sin(9 *t + 16/5) + 127/7 *sin(10 *t + 4/7) + 71/9 *sin(11 *t + 30/7) + 46/3 *sin(12 *t + 2/7) - 3661/6) *θ(23 *π - t) *θ(t - 19 *π) + (-115/7 *sin(1/7 - 13 *t) - 462/13 *sin(1/6 - 9 *t) - 353/3 *sin(6/5 - 7 *t) - 6463/6 *sin(5/6 - 2 *t) + 340/3 *sin(8 *t) + 22885/12 *sin(t + 6/5) + 443/7 *sin(3 *t + 19/5) + 295/14 *sin(4 *t + 5/2) + 1466/7 *sin(5 *t + 27/10) + 288/5 *sin(6 *t + 13/4) + 265/8 *sin(10 *t + 16/7) + 60/7 *sin(11 *t + 21/5) + 930/19 *sin(12 *t + 16/7) - 5475/8) *θ(19 *π - t) *θ(t - 15 *π) + (3299/2 *sin(t + 7/6) + 377/5 *sin(2 *t + 7/6) + 139/6 *sin(3 *t + 2/7) + 10166/7) *θ(15 *π - t) *θ(t - 11 *π) + (-30228/19 *sin(16/15 - t) + 200/7 *sin(2 *t + 35/12) + 316/9 *sin(3 *t + 7/3) + 178/5 *sin(4 *t + 12/7) + 365/9 *sin(5 *t + 21/5) + 18/7 *sin(6 *t + 11/9) - 20196/7) *θ(11 *π - t) *θ(t - 7 *π) + (-257/4 *sin(23/24 - 15 *t) - 2071/4 *sin(1/3 - 3 *t) - 99793/36 *sin(10/9 - 2 *t) + 51290/7 *sin(t + 1) + 6064/9 *sin(4 *t + 3/4) + 2497/5 *sin(5 *t + 16/9) + 2413/8 *sin(6 *t + 11/4) + 5585/21 *sin(7 *t + 1) + 493/3 *sin(8 *t + 5/3) + 859/11 *sin(9 *t + 3/2) + 462/5 *sin(10 *t + 26/7) + 421/4 *sin(11 *t + 2) + 735/8 *sin(12 *t + 5/2) + 63 *sin(13 *t + 8/3) + 425/7 *sin(14 *t + 71/18) - 4853/8) *θ(7 *π - t) *θ(t - 3 *π) + (-4027/7 *sin(4/3 - 5 *t) + 55361/7 *sin(t + 1) + 2324/3 *sin(2 *t + 31/16) + 705/7 *sin(3 *t + 11/9) + 2194/11 *sin(4 *t + 26/25) + 977/9 *sin(6 *t + 13/4) + 284 *sin(7 *t + 27/7) + 1026/7 *sin(8 *t + 7/5) + 677/8 *sin(9 *t + 19/7) + 1023/8 *sin(10 *t + 5/9) - 4475/8) *θ(3 *π - t) *θ(t + π)) *θ(sqr*t(sgn(sin(t/2))))
const y = (t) => ((-59 *sin(14/9 - 16 *t) - 5/2 *sin(4/3 - 15 *t) - 466/7 *sin(17/11 - 14 *t) - 14/5 *sin(14/9 - 13 *t) - 265/12 *sin(11/7 - 12 *t) - 185/2 *sin(11/7 - 8 *t) - 38/3 *sin(11/7 - 7 *t) - 2523/8 *sin(11/7 - 6 *t) - 7094/7 *sin(11/7 - 4 *t) - 451/5 *sin(14/9 - 3 *t) + 581/5 *sin(t + 11/7) + 707/6 *sin(2 *t + 8/5) + 289/36 *sin(5 *t + 4/3) + 93/7 *sin(9 *t + 12/7) + 592/9 *sin(10 *t + 13/8) + 137/9 *sin(11 *t + 14/3) - 63797/8) *θ(75**π - t) *θ(t - 71 *π) + (-311/8 *sin(11/7 - 4 *t) - 1619/5 *sin(11/7 - 2 *t) - 471/4 *sin(11/7 - t) + 107/3 *sin(3 *t + 11/7) + 4487/3) *θ(71 *π - t) *θ(t - 67 *π) + (-143/6 *sin(11/7 - 6 *t) - 709/10 *sin(11/7 - 4 *t) - 3736/15 *sin(11/7 - 2 *t) + 3961/30 *sin(t + 11/7) + 27/7 *sin(3 *t + 33/7) + 145/6 *sin(5 *t + 33/7) + 52/7 *sin(7 *t + 33/7) + 37/6 *sin(8 *t + 33/7) + 19529/14) *θ(67 *π - t) *θ(t - 63 *π) + (-11/5 *sin(14/9 - 17 *t) - 161/20 *sin(14/9 - 16 *t) - 52/7 *sin(11/7 - 12 *t) - 3/2 *sin(3/2 - 11 *t) - 67/10 *sin(14/9 - 10 *t) - 13/6 *sin(14/9 - 4 *t) + 573 *sin(t + 11/7) + 172/19 *sin(2 *t + 33/7) + 185/6 *sin(3 *t + 11/7) + 179/7 *sin(5 *t + 11/7) + 37/9 *sin(6 *t + 11/7) + 79/5 *sin(7 *t + 11/7) + 14/3 *sin(8 *t + 11/7) + 107/7 *sin(9 *t + 8/5) + 7/4 *sin(13 *t + 8/5) + 11/12 *sin(14 *t + 32/7) + 27/10 *sin(15 *t + 8/5) - 4217/3) *θ(63 *π - t) *θ(t - 59 *π) + (35/3 *sin(t + 33/7) + 550/9 *sin(2 *t + 47/10) + 255/4 *sin(3 *t + 17/11) + 979/6 *sin(4 *t + 14/9) + 245/9 *sin(5 *t + 3/2) + 101/4 *sin(6 *t + 17/11) + 820/11 *sin(7 *t + 3/2) + 437/7 *sin(8 *t + 3/2) + 339/7 *sin(9 *t + 14/3) + 75/4 *sin(10 *t + 3/2) - 17567/5) *θ(59 *π - t) *θ(t - 55 *π) + (-25/4 *sin(11/7 - 19 *t) - 621/5 *sin(11/7 - 5 *t) + 498/5 *sin(t + 11/7) + 11/8 *sin(2 *t + 22/5) + 2609/15 *sin(3 *t + 11/7) + 149/3 *sin(4 *t + 8/5) + 52/5 *sin(6 *t + 14/3) + 271/10 *sin(7 *t + 14/9) + 1112/7 *sin(8 *t + 11/7) + 557/6 *sin(9 *t + 33/7) + 109/8 *sin(10 *t + 14/3) + 403/6 *sin(11 *t + 33/7) + 113/3 *sin(12 *t + 8/5) + 609/8 *sin(13 *t + 11/7) + 11/8 *sin(14 *t + 9/2) + 193/7 *sin(15 *t + 11/7) + 117/10 *sin(16 *t + 11/7) + 204/5 *sin(17 *t + 33/7) + 77/10 *sin(18 *t + 33/7) + 401/20 *sin(20 *t + 33/7) + 56/3 *sin(21 *t + 33/7) - 56953/7) *θ(55 *π - t) *θ(t - 51 *π) + (-459/7 *sin(1/8 - 13 *t) - 459/5 *sin(7/5 - 11 *t) + 89/5 *sin(t + 31/15) + 4109/11 *sin(2 *t + 14/3) + 23 *sin(3 *t + 23/8) + 2692/23 *sin(4 *t + 40/9) + 968/13 *sin(5 *t + 9/4) + 1201/6 *sin(6 *t + 11/6) + 1017/5 *sin(7 *t + 9/5) + 5035/8 *sin(8 *t + 14/3) + 1697/9 *sin(9 *t + 23/5) + 996/7 *sin(10 *t + 13/8) + 166 *sin(12 *t + 4/3) + 736/5 *sin(14 *t + 28/27) - 29201/5) *θ(51 *π - t) *θ(t - 47 *π) + (7611/8 *sin(t + 11/7) + 2098/3 *sin(2 *t + 11/7) + 4549/5 *sin(3 *t + 11/7) + 3369/5 *sin(4 *t + 33/7) + 484/5 *sin(5 *t + 14/3) + 125/9 *sin(6 *t + 13/8) + 402/5 *sin(7 *t + 23/5) + 267/2 *sin(8 *t + 14/3) + 730/7 *sin(9 *t + 37/8) + 2056/17 *sin(10 *t + 14/3) + 35 *sin(11 *t + 12/7) - 5032) *θ(47 *π - t) *θ(t - 43 *π) + (-1233/22 *sin(7/5 - 9 *t) - 566/5 *sin(16/11 - 8 *t) - 733/12 *sin(14/9 - 7 *t) - 919/7 *sin(11/7 - 5 *t) - 3557/3 *sin(14/9 - 3 *t) - 2939/4 *sin(14/9 - 2 *t) + 6148/11 *sin(t + 11/7) + 1185/7 *sin(4 *t + 3/2) + 1600/13 *sin(6 *t + 8/5) + 59/5 *sin(10 *t + 9/7) + 71/9 *sin(11 *t + 13/3) + 164/5 *sin(12 *t + 13/8) - 41799/8) *θ(43 *π - t) *θ(t - 39 *π) + (-117/5 *sin(4/5 - 6 *t) - 145/4 *sin(5/4 - 4 *t) - 1311/7 *sin(7/5 - 2 *t) + 15551/10 *sin(t + 1/9) + 518 *sin(3 *t + 1/5) + 679/17 *sin(5 *t + 2/5) + 259/6 *sin(7 *t + 5/6) - 9484/7) *θ(39 *π - t) *θ(t - 35 *π) + (-130/7 *sin(9/8 - 4 *t) - 427/4 *sin(24/25 - 3 *t) - 3332/3 *sin(9/7 - t) + 932/19 *sin(2 *t + 30/7) - 32269/6) *θ(35 *π - t) *θ(t - 31 *π) + (-1119/13 *sin(10/9 - 3 *t) - 1386/17 *sin(4/3 - 2 *t) - 4103/4 *sin(9/7 - t) - 46877/9) *θ(31 *π - t) *θ(t - 27 *π) + (-7485/4 *sin(5/9 - t) + 1909/9 *sin(2 *t + 34/9) + 2861/4 *sin(3 *t + 23/5) + 11/2 *sin(4 *t + 7/2) + 111/8 *sin(5 *t + 12/7) + 511/8 *sin(6 *t + 16/15) + 180/7 *sin(7 *t + 11/4) + 279/4 *sin(8 *t + 17/5) + 76/5 *sin(9 *t + 81/20) - 16919/11) *θ(27 *π - t) *θ(t - 23 *π) + (-71/13 *sin(1/2 - 11 *t) - 119/6 *sin(17/16 - 6 *t) - 292/7 *sin(10/7 - 5 *t) - 64/13 *sin(3/5 - 3 *t) - 1493/3 *sin(2/7 - t) + 1883/8 *sin(2 *t + 7/6) + 171/7 *sin(4 *t + 32/9) + 251/25 *sin(7 *t + 1) + 35/2 *sin(8 *t + 16/7) + 117/10 *sin(9 *t + 15/4) + 43/9 *sin(10 *t + 29/8) + 43/9 *sin(12 *t + 20/13) - 65269/8) *θ(23 *π - t) *θ(t - 19 *π) + (-174/5 *sin(4/7 - 8 *t) - 4532/23 *sin(5/6 - 6 *t) + 36005/17 *sin(t + 25/9) + 2164/5 *sin(2 *t + 35/9) + 1376/5 *sin(3 *t + 13/7) + 1164/5 *sin(4 *t + 28/9) + 277/3 *sin(5 *t + 19/5) + 539/4 *sin(7 *t + 3/10) + 839/12 *sin(9 *t + 26/9) + 23/5 *sin(10 *t + 8/3) + 901/22 *sin(11 *t + 11/5) + 163/5 *sin(12 *t + 5/9) + 135/7 *sin(13 *t + 9/2) - 11569/2) *θ(19 *π - t) *θ(t - 15 *π) + (-5801/5 *sin(5/11 - t) + 171/7 *sin(2 *t + 21/5) + 782/9 *sin(3 *t + 17/4) - 7576/5) *θ(15 *π - t) *θ(t - 11 *π) + (-34/3 *sin(1 - 4 *t) - 838/7 *sin(1/2 - 2 *t) + 7788/7 *sin(t + 2/5) + 1055/7 *sin(3 *t + 11/7) + 219/10 *sin(5 *t + 19/5) + 194/7 *sin(6 *t + 49/11) - 7441/5) *θ(11 *π - t) *θ(t - 7 *π) + (-209/2 *sin(5/6 - 8 *t) + 58085/14 *sin(t + 21/8) + 5813/3 *sin(2 *t + 26/7) + 25709/7 *sin(3 *t + 10/7) + 6831/8 *sin(4 *t + 9/4) + 3693/10 *sin(5 *t + 38/13) + 6453/7 *sin(6 *t + 30/7) + 1996/11 *sin(7 *t + 16/5) + 3541/22 *sin(9 *t + 5/4) + 2263/29 *sin(10 *t + 35/18) + 4279/46 *sin(11 *t + 1/5) + 523/4 *sin(12 *t + 21/5) + 326/7 *sin(13 *t + 21/8) + 396/7 *sin(14 *t + 21/5) + 1446/17 *sin(15 *t + 2/3) + 1971/5) *θ(7 *π - t) *θ(t - 3 *π) + (-938/5 *sin(8/9 - 7 *t) + 26701/4 *sin(t + 18/7) + 8911/33 *sin(2 *t + 7/2) + 4615/6 *sin(3 *t + 32/7) + 18102/23 *sin(4 *t + 12/5) + 1129/7 *sin(5 *t + 13/4) + 473/7 *sin(6 *t + 10/7) + 671/7 *sin(8 *t + 1/14) + 7/4 *sin(9 *t + 9/2) + 491/9 *sin(10 *t + 29/14) - 19490/3) *θ(3 *π - t) *θ(t + π)) *θ(sqr*t(sgn(sin(t/2))))

const spiral = (size) => x();

export default spiral;