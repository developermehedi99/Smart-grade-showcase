import searchImg from "../../assets/search.png";

const Student = () => {
  const students = [
    {
      id: 1,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "John Smith",
      score: "A+",
      Percentage: "80%",
    },
    {
      id: 2,
      image: "https://i.ibb.co/LNssTDC/avatar.png",
      name: "Mehedi Hasan",
      score: "A",
      Percentage: "90%",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2014/11/03/17/50/man-515518_1280.jpg",
      name: "kazi hayat",
      score: "A-",
      Percentage: "95%",
    },
    {
      id: 4,
      image: "https://i.ibb.co/LNssTDC/avatar.png",
      name: "Mountain dew",
      score: "A+",
      Percentage: "98%",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2014/11/03/17/50/man-515518_1280.jpg",
      name: "shane watson",
      score: "A+",
      Percentage: "90%",
    },
    {
      id: 6,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "cat mutti",
      score: "F",
      Percentage: "40%",
    },
    {
      id: 7,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "jonson marsh",
      score: "B",
      Percentage: "90%",
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2014/11/03/17/50/man-515518_1280.jpg",
      name: "katappa daj",
      score: "A+",
      Percentage: "90%",
    },
    {
      id: 9,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "rana khan",
      score: "A-",
      Percentage: "90%",
    },
    {
      id: 10,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "sharma dank",
      score: "A",
      Percentage: "96%",
    },
  ];
  const classTowStudents = [
    {
      id: 1,
      image: "https://i.ibb.co/dM4nhfp/entrepreneur-593358-1280.jpg",
      name: "Nazimuddin",
      score: "A+",
      Percentage: "92%",
    },
    {
      id: 2,
      image: "https://i.ibb.co/LNssTDC/avatar.png",
      name: "asraful islam",
      score: "F",
      Percentage: "60%",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2013/05/28/18/10/man-114257_1280.jpg",
      name: "tamim khan",
      score: "C",
      Percentage: "69%",
    },
    {
      id: 4,
      image: "https://i.ibb.co/LNssTDC/avatar.png",
      name: "hujur amir",
      score: "A-",
      Percentage: "78%",
    },
    {
      id: 5,
      image: "https://i.ibb.co/dM4nhfp/entrepreneur-593358-1280.jpg",
      name: "sanu anoyar",
      score: "A",
      Percentage: "96%",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2013/05/28/18/10/man-114257_1280.jpg",
      name: "Haider paluyan",
      score: "A+",
      Percentage: "50%",
    },
    {
      id: 7,
      image: "https://i.ibb.co/LNssTDC/avatar.png",
      name: "John Smith",
      score: "B",
      Percentage: "99%",
    },
    {
      id: 8,
      image: "https://i.ibb.co/hDqKs3H/adult-1851571-1280.jpg",
      name: "sorkar kar",
      score: "A+",
      Percentage: "80%",
    },
    {
      id: 9,
      image: "https://i.ibb.co/dM4nhfp/entrepreneur-593358-1280.jpg",
      name: "nadim paa",
      score: "A",
      Percentage: "70%",
    },
    {
      id: 10,
      image: "https://i.ibb.co/dM4nhfp/entrepreneur-593358-1280.jpg",
      name: "shahid afridi",
      score: "A-",
      Percentage: "66%",
    },
  ];
  const classThreeStudents = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
      name: "Taslima ",
      score: "A",
      Percentage: "72%",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png",
      name: "Jahan nurmoni",
      score: "A+",
      Percentage: "85%",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg",
      name: "Riyad khan",
      score: "C+",
      Percentage: "79%",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
      name: "junaid khan",
      score: "A-",
      Percentage: "80%",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png",
      name: "sadika khaun",
      score: "A",
      Percentage: "46%",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2013/05/28/18/10/man-114257_1280.jpg",
      name: "Faruk khan",
      score: "F",
      Percentage: "50%",
    },
    {
      id: 7,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg",
      name: "Jui khatun",
      score: "A",
      Percentage: "69%",
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png",
      name: "afzal aff",
      score: "B-",
      Percentage: "90%",
    },
    {
      id: 9,
      image:
        "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
      name: "Mim khatun",
      score: "A-",
      Percentage: "60%",
    },
    {
      id: 10,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg",
      name: "abdur rahim",
      score: "A+",
      Percentage: "97%",
    },
  ];

  return (
    <div className="bg-[#172227] py-24">
      <div className="text-center">
        <h1 className="text-[40px] text-white">
          <span className="text-[#00cc8c] font-bold">Students </span>of the Year
        </h1>
        <form className="flex items-center relative ">
          <input
            className="py-[10px] px-4 w-1/3 mx-auto mt-7 rounded-full"
            type="text"
            placeholder="Search By Students"
          />
          <img
            className="w-[16px] h-[16px] absolute right-[35%] top-[43px] text-center text-white "
            src={searchImg}
            alt=""
          />
        </form>
      </div>
      <div className="max-w-[848px] mx-auto overflow-auto mt-16">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="p-5 text-xl font-semibold leading-[28px] text-white">
                Id
              </th>
              <th className="p-5 text-xl font-semibold leading-[28px] text-white">
                Name
              </th>
              <th className="p-5 text-xl font-semibold leading-[28px] text-white">
                Score
              </th>
              <th className="p-5 text-xl font-semibold leading-[28px] text-white">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/5">
              <td className="p-5 text-sm text-white md:text-xl" colSpan="4">
                Class One
              </td>
            </tr>
            {students.map((student) => (
              <tr className="border-b border-[#7ECEB529]" key={student.id}>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.id}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal flex text-white">
                  <img
                    className="w-[32px] h-[32px] rounded-full mr-4"
                    src={student.image}
                    alt=""
                  />{" "}
                  <h2>{student.name}</h2>
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.score}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.Percentage}
                </td>
              </tr>
            ))}
            <tr className="bg-white/5">
              <td className="p-5 text-sm text-white md:text-xl" colSpan="4">
                Class Two
              </td>
            </tr>
            {classTowStudents.map((student) => (
              <tr className="border-b border-[#7ECEB529]" key={student.id}>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.id}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal flex text-white">
                  <img
                    className="w-[32px] h-[32px] rounded-full mr-4"
                    src={student.image}
                    alt=""
                  />{" "}
                  <h2>{student.name}</h2>
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.score}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.Percentage}
                </td>
              </tr>
            ))}
            <tr className="bg-white/5">
              <td className="p-5 text-sm text-white md:text-xl" colSpan="4">
                Class Three
              </td>
            </tr>
            {classThreeStudents.map((student) => (
              <tr className="border-b border-[#7ECEB529]" key={student.id}>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.id}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal flex text-white">
                  <img
                    className="w-[32px] h-[32px] rounded-full mr-4"
                    src={student.image}
                    alt=""
                  />{" "}
                  <h2>{student.name}</h2>
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.score}
                </td>
                <td className="text-xl p-5 leading-[28px] font-normal text-white">
                  {student.Percentage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
