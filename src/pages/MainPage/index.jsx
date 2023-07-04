import { useDispatch, useSelector } from "react-redux";
import DetalidCard from "../../componets/DetaliedCard";
import Layout from "../../componets/Layout";
import { useEffect, useState } from "react";
import { getPhotos } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import './styles.css';
import { Bars } from "react-loader-spinner";



const MainPage = () => {
  const photos = useSelector(state => state.photos.photos);
  const loading = useSelector(state => state.photos.isPhotosLoading);
  const total = useSelector(state => state.photos.totalPhotos);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);



  useEffect(() => {
    dispatch(getPhotos(page))
      // eslint-disable-next-line 
  }, [page]);
   


  const nextHandler = () => {
    setPage(page + 1);
 };
   return (

    <Layout nickName="Artem" id={1}>
      <div className="cnMainPageRottBackendd">
        {loading ? (<div className="cnMainLOaderContainer">
            <Bars color="#000BFF" height={80} width={80} />
          </div>) :
        <InfiniteScroll
          dataLength={photos.length}
          next={nextHandler}
          hasMore={photos.length < total }
          loader={
             <div className="cnMainLOaderContainer">
              <Bars color="#000BFF" height={15} width={15} />
            </div> }
          endMessage={
            <p className="cnMainLOaderContainer">Thats all!</p>
          }
        >
          { photos.map(({ author, imgUrl, id, likes,comments }) => (
            <DetalidCard
              key={id}
              userName={author.nickname}
              userId={author.id}
              avatarUrl={author.avatarUrl}
              imgUrl={imgUrl}
              likes={likes.length}
              isLikedByYou={true}
              comments={comments}
              className="cnMainPageCardBody"
            />
          ))}
        </InfiniteScroll>}
      </div>




    </Layout>

  );
};
export default MainPage;