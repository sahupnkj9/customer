import {useState} from "react";
import ProfileTabs from "../components/ProfileTabs";
import ProfileDetails from "../components/ProfileDetails";
import AssignmentDetails from "../components/AssignmentDetails";
import PaymentDetails from "../components/PaymentDetails";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="p-6 font-outfit">
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab == "profile" && <ProfileDetails />}
      {activeTab == "assignment" && <AssignmentDetails />}
      {activeTab == "payments" && <PaymentDetails />}
    </div>
  );
};

export default Profile;
