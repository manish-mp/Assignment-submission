
import './App.css';
import Card from './Card';

function App() {
  const bookData=[
    {
      title:"War and Peace",
      subtitle:"Left-by Leo Tolstoy Batsman",
      desc:"A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf",
      img:"https://images4.penguinrandomhouse.com/cover/9781400079988"
    },
    {
      title:"Song of Solomon",
      subtitle:"by Toni Morrison",
      desc:"One must always read a novel by this Nobel Prize winning author.",
      img:"https://images3.penguinrandomhouse.com/cover/9781400033423"
    },
    {
      title:"Ulysses",
      subtitle:"by James Joyce",
      desc:"Joyce’s parallel use of The Odyssey…has the importance of a scientific discovery…” –T. S. Eliot.",
      img:"https://images3.penguinrandomhouse.com/cover/9780679722762"
    },
    {
      title:"The Shadow of the Wind",
      subtitle:"by Carlos Ruiz Zafon",
      desc:"An incredible book by a beloved writer is a must read.",
      img:"https://images2.penguinrandomhouse.com/cover/9780143126393"
    },
    {
      title:"The Lord of the Rings",
      subtitle:"by J.R.R. Tolkien",
      desc:"Most people have seen the epic movie, but have you read the book.",
      img:"https://images3.penguinrandomhouse.com/cover/9780345339706"
    },
    {
      title:"The Satanic Verses",
      subtitle:"by Salman Rushdie",
      desc:"Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list.",
      img:"https://images3.penguinrandomhouse.com/cover/9780812976717"
    }
    
  ]


  return (
    
    <div className="container">
            {
              bookData.map((data,label)=>(
                <Card key={label} title={data.title} subtitle={data.subtitle} img={data.img} desc={data.desc} />
              ))
            }  
      </div>
  );
}

export default App;
