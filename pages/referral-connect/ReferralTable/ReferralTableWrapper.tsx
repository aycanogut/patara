import ReferralTableFooter from './ReferralTableFooter';
import ReferralTabs from './ReferralTabs';

function ReferralTableWrapper() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-5" />

      <ReferralTabs />

      <ReferralTableFooter />
      {/* TODO: Pagination gelecek */}
      {/* TODO: Button gelecek */}
    </section>
  );
}

export default ReferralTableWrapper;
