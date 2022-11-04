import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import All from './All';
import List from './List';
import Load from './Load';

const Main = ({ limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const MS = useRef(null);
    const handleImgError = (e) => {
        e.target.src = process.env.PUBLIC_URL + "/cover.jpg";
    }
    const movieData = async () => {
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}`);
        getMovie(movie.data.data.movies);
        console.log(movie.data.data.movies);
        setLoad(false)
    }
    useEffect(() => {
        movieData()
    }, [])
    return (
        <>
            <section className='Main'>
                <Outlet />
                {
                    load
                        ? <Load />
                        :
                        <Slider
                            slidesToShow={5}
                            arrows={false}
                            ref={MS}
                            centerMode={true}
                            centerPadding={'100px'}
                        >
                            {
                                movie.map(it => {
                                    return (
                                        <div key={it.id} className="itm">

                                            <Link to={`/detail/${it.id}`}>
                                                <figure>
                                                    <img src={it.large_cover_image} alt={it.title} onError={handleImgError} />
                                                </figure>
                                                <div className="case">
                                                    <div className='title'>{it.title_long}</div>
                                                    <div className='desc'>{it.description_full.substr(0, 100)} ... </div>
                                                    <ul className='genre'>
                                                        {
                                                            it.genres.map((g, i) => <li key={i}>{g}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </Link>

                                        </div>
                                    )
                                })
                            }
                        </Slider>
                }
                <div className="arrows">
                    <i className="xi-arrow-left" onClick={() => MS.current.slickPrev()}></i>
                    <i className="xi-arrow-right" onClick={() => MS.current.slickNext()}></i>
                </div>
            </section>
            <All />
            <List genre='Fantasy' limit={16} />
            <List genre='Animation' limit={16} />
            <List genre='Thriller' limit={16} />
        </>
    )
}

export default Main;