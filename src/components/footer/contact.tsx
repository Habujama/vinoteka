import React, { FC } from 'react'

const Contact: FC = () => (
  <>
    <dt className="font-medium">Martin Matoušek</dt>
    <dd>jednatel</dd>
    <dd>
      <a href="tel:775601128" className="underline hover:no-underline">
        +420 775 601 128
      </a>
    </dd>
    <dd>
      <a
        href="mailto:info@vinobohemia.com"
        className="underline hover:no-underline"
      >
        info@vinobohemia.com
      </a>
    </dd>
    <dd className="font-medium mt-2">telefon do vinotéky</dd>
    <dd>
      <a href="tel:775601129" className="underline hover:no-underline">
        +420 775 601 129
      </a>
    </dd>
  </>
)

export default Contact
