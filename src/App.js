import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import Movie from './components/Movie';


class App extends Component {
  state = {
    isLoading:true,
    movie:[],
  };

  // 생명 주기 함수 렌더링이 끝나고 나서 실행되는 함수

  getMovies = async()=>{
    const{
      data:{
        data:{movies}, //구조분해할당을 통해 movies키에 접근하기 위해 수정함.
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // 영화 평점순 정렬
    console.log(movies);//무비데이터만 출력해보기
    
    this.setState({movies, isLoading:false}); // es6에서 객체의 키이름과 대입할 변수의 이름이 같으면 생략이
  }

  //생명주기함수 render링이 끝나고 나서 실행되는 함수
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false})
    // },6000);
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    
    return (
      <>
      <header className='header'>
        <h1><img src={"./images/Logo-YTS.svg"} alt="로고" /></h1>
      </header>
      <main>
      {isLoading?<img src={"./images/bx_loader.gif"} alt="로딩중" className='load_img'/>:
      (<section>
        {movies.map((movie) => 
          <Movie
            key = {movie.id} 
            id = {movie.id} 
            year = {movie.year} 
            title = {movie.title} 
            summary = {movie.summary} 
            poster = {movie.medium_cover_image} 
            genres = {movie.genres} 
          />
        )}
      </section>)
      }
        {/* 현재 isLoading이 true면 로딩 이미지, 그렇지 않으면 we are ready */}
        {/* <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="로딩중" />
        <img src={'./images/bx_loader.gif'} alt="로딩중" /> */}
      </main>
      </>
    );
  }
}

export default App;