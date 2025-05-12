import ReferralTableFooter from './ReferralTableFooter';

import ReferralTable from './index';

function ReferralTableWrapper() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-5">
        <header className="flex items-center justify-between">
          <h2 className="font-geist text-text-primary text-2xl font-bold">Earnings</h2>

          {/* TODO: Tabs gelecek */}
        </header>

        <ReferralTable />
      </div>

      <ReferralTableFooter />
      {/* TODO: Pagination gelecek */}
      {/* TODO: Button gelecek */}
    </section>
  );
}

export default ReferralTableWrapper;
