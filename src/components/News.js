import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

 const News=(props)=> {
const [articles, setatricles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

  
 const  Update= async()=> {   //we make common funcion for both prev , next click and  componentDidMount
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e97ef977ef5b44ee8b45d4a969d0835b&page=${page+1}&pagesize=${props.pagesize}`;
    // AIzaSyC73BjIJzNCHdEYn0fKENfjS83YAU0Oz_M
    setpage(page+1)         // the error of coming to same page on clicking next button is corrected by this
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setatricles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);

  }
useEffect(() => {
  Update();
  document.title=`${(props.category)}-𝔇𝔞𝔦𝔫𝔦𝔨 𝔍𝔞𝔡𝔲𝔤𝔞𝔯`
}, [])



  const handlePrevClick = async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e97ef977ef5b44ee8b45d4a969d0835b&page=${state.page-1}&pagesize=${props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page : this.state.page-1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
    setpage(page-1)
    Update();
  }
  const handleNextClick = async()=>{
//     if(state.page+1 > Math.ceil(state.totalResults/props.pagesize)){
// //we do this if else b/c next pe click krte krte jb news khtm ho jaye to aage khali page na aaye isliye  ye kiya
//     }else{
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e97ef977ef5b44ee8b45d4a969d0835b&page=${this.state.page+1}&pagesize=${props.pagesize}`;
//   this.setState({loading:true});
//   let data = await fetch(url);
//   let parsedData = await data.json();
//     this.setState({
//       page : this.state.page+1,
//       articles : parsedData.articles,
//       loading:false
//     })
      setpage(page+1)
      Update();

  }
  



    // console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
    return (
    <div className="container my-3">
        <h2 className='text-center' style={{margin:'35px 0px' ,marginTop:'90px'}}>Dainik jadugar Top-Headlines</h2>
        {loading && <Spinner />}          {/* jb jb loading true h tb tb spinner show krega*/}
      <div className="row">
          {/* humne news jo ki articles mei pdi h yha leke aaye h just below*/}
        {! loading && articles.map((element)=>{               {/*is line mei jb  loading true ni hogi tb hi content show hoga*/}

            return <div className="col-md-4" key = {element.url} >
                <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>    
            </div>
        
        }) } 
        
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark mx-2" onClick={handlePrevClick}>&larr; Previous</button>
      <button disabled={page+1 > Math.ceil(totalResults/props.pagesize)} type="button" className="btn btn-dark mx-2" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
      
    )
  }

News. defaultProps = {
  country: 'in',
  pagesize: 6,
  category:'general',
}

News. propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category:PropTypes.string,
}
export default News