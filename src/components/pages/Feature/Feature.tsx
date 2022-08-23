import TryIt from './components/tryIt/TryIt';
import Dashboard from "./components/dashboard/Dashboard";
import ManageOrders from "./components/manageOrders/ManageOrders";
import BreezeOrders from "./components/breezeOrders/BreezeOrders";
import SoundsEasy from "./components/soundsEasy/SoundsEasy";
import MakeFast from "./components/makeFast/MakeFast";
import GetSmarter from "./components/getSmarter/GetSmarter";
import Supercharge from "./components/supercharge/Supercharge";
import FAQ from "./components/faq/FAQ";
import SendInvoices from "./components/sendInvoices/SendInvoices";
import RunIt from "./components/runIt/RunIt";
import LoginForm from "../../common/loginForm/LoginForm";
import { LoginFormWrapper } from './FeatureStyles';
import { useToggle } from 'react-use';
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Feature = () => {
    const [isOpen, setIsOpen] = useToggle(true);

    const modalRef = useOnClickOutside(() => {
        setIsOpen(false);
    });

    return (
        <main className='features'>
            <LoginFormWrapper isOpen={isOpen}>
                <LoginForm modalRef={modalRef}/>
            </LoginFormWrapper>
            <TryIt/>
            <Dashboard/>
            <ManageOrders/>
            <BreezeOrders/>
            <SoundsEasy/>
            <SendInvoices/>
            <MakeFast/>
            <GetSmarter/>
            <RunIt/>
            <Supercharge/>
            <FAQ/>
        </main>
    );
};

export default Feature;
