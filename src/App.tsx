import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/routes/Dashboard/Dashboard";
import Settings from "./components/routes/Settings/Settings";

const Transactions = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
    <p>View your transactions here.</p>
  </motion.div>
);

const Accounts = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
    <p>Manage your accounts here.</p>
  </motion.div>
);

const Investments = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Investments</h2>
    <p>Track your investments here.</p>
  </motion.div>
);

const CreditCards = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Credit Cards</h2>
    <p>Manage your credit cards here.</p>
  </motion.div>
);

const Loans = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Loans</h2>
    <p>View your loans here.</p>
  </motion.div>
);

const Services = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Services</h2>
    <p>Access our services here.</p>
  </motion.div>
);

const Privileges = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="p-8"
  >
    <h2 className="text-2xl font-semibold mb-4">My Privileges</h2>
    <p>View your privileges here.</p>
  </motion.div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="investments" element={<Investments />} />
        <Route path="credit-cards" element={<CreditCards />} />
        <Route path="loans" element={<Loans />} />
        <Route path="services" element={<Services />} />
        <Route path="privileges" element={<Privileges />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
