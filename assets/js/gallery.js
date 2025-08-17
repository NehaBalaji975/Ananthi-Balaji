const photos = [
  {src:'assets/images/gallery/01.jpg',caption:'Wedding day, 1990'},
  {src:'assets/images/gallery/02.jpg',caption:'First home together'},
  {src:'assets/images/gallery/03.jpg',caption:'Family picnic, 1992'},
  {src:'assets/images/gallery/04.jpg',caption:'Temple visit, 1993'},
  {src:'assets/images/gallery/05.jpg',caption:'First big trip, 1994'},
  {src:'assets/images/gallery/06.jpg',caption:'Celebrating Diwali, 1995'},
  {src:'assets/images/gallery/07.jpg',caption:'With friends, 1996'},
  {src:'assets/images/gallery/08.jpg',caption:'A peaceful evening walk'},
  {src:'assets/images/gallery/09.jpg',caption:'Birthday surprise, 1998'},
  {src:'assets/images/gallery/10.jpg',caption:'Holiday in Ooty, 1999'},
  {src:'assets/images/gallery/11.jpg',caption:'A joyful festival, 2000'},
  {src:'assets/images/gallery/12.jpg',caption:'Memorable family outing, 2001'},
  {src:'assets/images/gallery/13.jpg',caption:'Anniversary celebration, 2002'},
  {src:'assets/images/gallery/14.jpg',caption:'Family vacation, 2003'},
  {src:'assets/images/gallery/15.jpg',caption:'A special dinner, 2004'},
  {src:'assets/images/gallery/16.jpg',caption:'Traditional celebration, 2005'},
  {src:'assets/images/gallery/17.jpg',caption:'Weekend getaway, 2006'},
  {src:'assets/images/gallery/18.jpg',caption:'A happy festival, 2007'},
  {src:'assets/images/gallery/19.jpg',caption:'Laughing together, 2008'},
  {src:'assets/images/gallery/20.jpg',caption:'New beginnings, 2009'},
  {src:'assets/images/gallery/21.jpg',caption:'A proud family moment, 2010'},
  {src:'assets/images/gallery/22.jpg',caption:'Evening by the lake, 2011'},
  {src:'assets/images/gallery/23.jpg',caption:'A festival to remember, 2012'},
  {src:'assets/images/gallery/24.jpg',caption:'Silver anniversary celebration, 2015'}
];

let order = [...photos.keys()];
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
order = shuffle(order);
let idx=0;
const btn=document.getElementById('nextBtn');
const img=document.getElementById('photo');
const cap=document.getElementById('caption');
function showNext(){
  if(idx>=order.length){order=shuffle([...photos.keys()]);idx=0;}
  const p=photos[order[idx++]];
  img.src=p.src;cap.textContent=p.caption;
}
btn.addEventListener('click',showNext);
