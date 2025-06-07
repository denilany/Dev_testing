import { FaSearch } from "react-icons/fa";
import { Container } from '../../../components/Layout.jsx';


export default function SearchSection() {
  return (
       <Container>

    <div className="bg-[#f0f8ff] p-6 rounded-2xl w-full max-w-screen mx-auto my-10 shadow-sm">
      {/* Top row: search bar and button */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by skill, tech stack etc"
            className="w-full bg-white rounded-full shadow-sm px-6 py-3 text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>
        <button className="flex-shrink-0 bg-[#2d7ef8] hover:bg-[#1e6fe0] text-white rounded-full p-4 transition-colors duration-200 self-start sm:self-auto">
          <FaSearch className="w-5 h-5" />
        </button>
      </div>

      {/* Filter buttons below */}
      <div className="mt-4 flex flex-col xs:flex-row gap-4">
        <div className="bg-white rounded-full shadow px-6 py-3 text-center text-gray-900 w-full xs:w-1/2">
          All Roles
        </div>
        <div className="bg-white rounded-full shadow px-6 py-3 text-center text-gray-900 w-full xs:w-1/2">
          Availability
        </div>
      </div>
    </div>
          </Container>

  );
}
