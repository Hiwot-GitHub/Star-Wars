import React, {useEffect} from 'react';
import Lister from '../components/Lister/Lister.js';
import {getPeople, getPersonById}  from '../util/Starwars.js';

export default function ListerPage(){
 /*
    const [peoplePerPage, setPeoplePerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const offset = (currentPage - 1) * 10 + 1;
          const people = [];
          for (let i = offset; i <= offset + 9; i++) {
            const person = await getPersonById(i);
            people.push(person);
          }
          setPeoplePerPage(people);
        } catch (error) {
          console.error('Error:', error);
        }
      }
  
      fetchData();
    }, [currentPage]);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handlePreviousClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const renderPaginationButtons = () => {
      const buttons = [];
      for (let i = 1; i <= 10; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={i === currentPage ? 'active' : ''}
          >
            {i}
          </button>
        );
      }
      return buttons;
    };
*/
  return (
    <div className='App'>
        <Lister />  //people=peoplePerpage as props to send data on particularpage
        {/*
          <div className='pagination'>
          <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={handleNextClick}
          disabled={currentPage === 10}
        >
          Next
        </button>
      </div>
         */}
    </div>
  )

}