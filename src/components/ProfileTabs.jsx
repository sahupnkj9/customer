import { ClipboardList, CreditCard, MapPin, User } from "lucide-react";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    {
      id: "assignment",
      label: "Assignment",
      icon: <ClipboardList size={18} />,
    },
    { id: "payments", label: "Payments", icon: <CreditCard size={18} /> },
  ];
  return (
    <div className="flex  gap-12 border-b mb-6 p-2 font-outfit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 pb-2  transition-all ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
