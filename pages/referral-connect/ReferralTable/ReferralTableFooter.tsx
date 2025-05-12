import ReferralTableButtons from './ReferralTableButtons';
import ReferralTableDropdown from './ReferralTableDropdown';
import ReferralTablePagination from './ReferralTablePagination';

function ReferralTableFooter() {
  return (
    <footer className="bg-background-primary flex justify-between rounded-b-2xl p-4">
      <ReferralTableDropdown />
      <ReferralTablePagination />
      <ReferralTableButtons />
    </footer>
  );
}

export default ReferralTableFooter;
