
const quotes = [
    {quote_english : 'Knowledge is power.',

    quote_korean : '아는 것이 힘이다.'},
    
     
    
    {quote_english : 'No pain no gain.',
    
    quote_korean : '고통 없이는 얻는 것도 없다.'},
    
     
    
    {quote_english : 'An early bird catch the worm.',
    
    quote_korean : '일찍 일어나는 새가 벌레를 잡는다.'},
    
     
    
    {quote_english : 'There is no royal road to Rome.',
    
    quote_korean : '로마로 가는 데는 왕도가 없다.'},
    
     
    
    {quote_english : 'Slow and steady win the race.',
    
    quote_korean : '천천히 그리고 꾸준히 가는 자가 경주에서 승리한다.'},
    
     
    
    {quote_english : 'Heaven helps those who help themselves.',
    
    quote_korean : '하늘은 스스로 돕는 자를 돕는다.'},
    
     
    
    {quote_english : 'plenty of preparations lead to good results.',
    
    quote_korean : '많은 준비가 좋은 결과로 이끈다.'},
    
     
    
    {quote_english : 'Idleness is an enemy to success.',
    
    quote_korean : '게으름은 성공의 적이다.'}, 
    
     
    
    {quote_english : 'Diligence guarantees success.',
    
    quote_korean : '근면은 성공을 보장한다.'},
    
     
    
    {quote_english : 'Our patience will achieve more than our force.',
    
    quote_korean : '우리의 인내는 우리의 힘보다 더 많은 것을 성취한다.'}

]

const randInt = Math.floor(Math.random() * quotes.length);

const englishQuote = document.querySelector('.english-quote');
const koreanQuote = document.querySelector('.korean-quote');

const todayQuote = quotes[randInt]
console.log(todayQuote)

englishQuote.innerText = todayQuote['quote_english']
koreanQuote.innerText = todayQuote['quote_korean']