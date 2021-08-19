import { useParams } from "react-router-dom";

function SideBar({ messages }) {
  const { id } = useParams();
  return <div className="SideBar">Test</div>;
}

export default SideBar;
