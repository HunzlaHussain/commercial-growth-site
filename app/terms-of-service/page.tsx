"use client"
import HomeHeader from "@/components/home/home-header"
import type { Metadata } from "next"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

// export const metadata: Metadata = {
//   title: "Client Partnership Terms & Conditions | LocalBloom",
//   description: "Client partnership terms and conditions for LocalBloom lead generation and appointment-setting services.",
// }

export default function TermsOfServicePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleContactClick = () => {
    window.location.href =
      "mailto:info@localbloom.io?subject=Commercial Lead Generation Inquiry&body=Hi LocalBloom team,%0D%0A%0D%0AI'm interested in learning more about your commercial lead generation and growth system.%0D%0A%0D%0APlease contact me to discuss qualified appointments, pipeline growth, and revenue.%0D%0A%0D%0AThank you!"
  }

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
       <HomeHeader
        mounted={mounted}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onContactClick={handleContactClick}
      />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Client Partnership Terms &amp; Conditions</h1>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            These Client Partnership Terms &amp; Conditions (&quot;Terms&quot;) govern the lead generation and
            appointment-setting services provided by Social Bloom (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) to the client (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;).
          </p>
          <p>
            By making payment for the services after being presented with these Terms, you acknowledge that you have read,
            understood, and agree to be bound by these Terms.
          </p>
        </div>

        <div className="mt-12 space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We provide outbound lead generation and appointment-setting services, which may include development of your
              ICP Matrix, offer optimization, outbound infrastructure setup, campaign launch, prospect outreach, and
              scheduling meetings on your calendar.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Our services are provided as a business-to-business partnership and depend on timely cooperation, accurate
              information, and consistent participation by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Definitions</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">For purposes of these Terms:</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>
                <span className="font-semibold text-black dark:text-white">&quot;ICP Matrix&quot;</span> means the ideal
                customer profile, qualification criteria, targeting standards, and related parameters mutually agreed by
                the parties for the campaign.
              </li>
              <li>
                <span className="font-semibold text-black dark:text-white">&quot;Launch Date&quot;</span> means the date
                on which the first outbound campaign is actually launched by us after the required onboarding items,
                access, information, and assets have been provided by you.
              </li>
              <li>
                <span className="font-semibold text-black dark:text-white">&quot;Qualified Meeting&quot;</span> means a
                meeting with a prospect who matches the mutually agreed ICP Matrix. Qualification is determined by fit
                against the ICP Matrix, not by whether the prospect closes, expresses immediate buying intent, advances in
                your pipeline, or results in revenue.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
              Setup Fee; No Refund During Initial 60-Day Period; Limited Refund Eligibility
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The one-time setup fee covers the hard costs of building and launching your outbound foundation, including
              your ICP Matrix, offer optimization, and deployment of your dedicated cold email infrastructure.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              The setup fee is fully non-refundable during the first 60 days after the Launch Date. You may not request,
              initiate, or demand a refund of the setup fee during that 60-day period, regardless of campaign performance,
              dissatisfaction, frustration, or any other reason.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A refund of the setup fee is available only under the limited conditions stated in this Section. If no
              meetings are booked within the first 60 days after the Launch Date, you may submit a refund request only
              after day 60 and no later than day 70 following the Launch Date. Any refund request submitted before day 60
              or after day 70 will be invalid and automatically denied.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Any refund request is subject to our verification process. To qualify, we must confirm both that:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5 mt-3">
              <li>(a) zero meetings were actually booked during the first 60 days after the Launch Date; and</li>
              <li>
                (b) your actions or omissions did not interrupt, delay, impair, or otherwise interfere with campaign
                performance, meeting booking, or our ability to deliver the services.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Refund eligibility is excluded if there were any client-caused interruptions, blockers, or scope changes that
              reasonably affected campaign performance or meeting generation. This includes, without limitation, failure
              to provide a calendar link, failure to correctly set up, connect, integrate, or maintain the calendar link,
              calendar availability issues, failure to attend scheduled meetings, failure to provide required access,
              approvals, information, or assets, pauses or delays requested by you, or changes to the agreed ICP Matrix,
              qualification standards, offer, targeting, or campaign scope after launch.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If our review determines that at least one meeting was booked during the first 60 days after the Launch Date,
              or that any client-caused interruption, blocker, or material scope change occurred that affected performance,
              then the setup fee remains fully earned and non-refundable.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              For clarity, this refund provision applies only to the setup fee and does not apply to performance-based
              meeting fees or any other amounts due under these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Pay-for-Performance Fees and Billing</h2>
            <p className="text-gray-600 dark:text-gray-400">You agree to a performance fee of $250 per Qualified Meeting.</p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Performance fees will be invoiced and/or charged in accordance with our then-current billing process.
              Invoices must be paid upon receipt unless otherwise agreed by us in writing.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A meeting is chargeable when the meeting occurs and the prospect matches the mutually agreed ICP Matrix.
              Qualification is determined by the prospect&apos;s alignment with the agreed ICP Matrix and not by whether the
              prospect closes, expresses immediate buying intent, progresses in your sales process, or produces any
              particular sales outcome.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">ICP Qualification Standard</h2>
            <p className="text-gray-600 dark:text-gray-400">
              All booked and completed meetings are checked against the mutually agreed ICP Matrix to determine whether
              they are qualified and chargeable.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              The parties agree that the ICP Matrix is the controlling standard for determining whether a meeting is
              qualified and chargeable.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A meeting will not be deemed unqualified solely because the prospect did not close, did not move forward
              after the first call, was not ready to buy immediately, stopped responding after the meeting, needed longer
              follow-up, did not match your subjective expectations, or otherwise did not produce your desired outcome, so
              long as the prospect matched the agreed ICP Matrix.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
              Disputes, Review Process, and No Refunds on Confirmed Qualified Meetings
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you believe a meeting does not satisfy the agreed ICP Matrix, you must submit that dispute within 24
              hours after the meeting by adding the dispute and supporting reason in the app notes for that meeting.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Failure to submit a dispute in the app notes within that 24-hour period will be deemed your acceptance that
              the meeting matched the agreed ICP Matrix and is properly chargeable.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Submitting a dispute does not automatically mean the meeting will not be charged and does not by itself make
              the meeting non-chargeable. A dispute only triggers a further review by us to cross-check the meeting against
              the agreed ICP Matrix.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If our review confirms that the prospect matched the agreed ICP Matrix, the meeting remains fully
              chargeable.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If no timely dispute is submitted, or if our review determines that the meeting matched the agreed ICP
              Matrix, the applicable performance fee remains due and payable, and no refunds, credits, reversals, or
              chargebacks will be issued or permitted for that meeting, except as required by law.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If, after review, we determine that the meeting did not match the agreed ICP Matrix, the related performance
              fee will not be owed, or if already charged, may be adjusted by refund or credit in our ordinary billing
              process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Client Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You agree to cooperate in good faith and provide all information, access, assets, approvals, and support
              reasonably necessary for us to perform the services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              You are responsible for maintaining an accurate working calendar link, correctly setting up and integrating
              your scheduling systems, maintaining reasonable calendar availability for booked meetings, attending
              scheduled meetings or ensuring your team attends them, providing timely approvals, feedback, and required
              campaign information, and avoiding conduct that disrupts, delays, or undermines campaign execution.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              You acknowledge that outcomes from cold outbound lead generation depend in part on your responsiveness,
              calendar availability, internal sales process, follow-up, and overall handling of booked meetings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Changes to Scope, ICP, or Campaign Criteria</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Any material change to the ICP Matrix, qualification standards, offer, targeting, messaging, or campaign
              scope after launch may affect campaign performance, qualification outcomes, and refund eligibility.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              We are not responsible for reduced performance, qualification disputes, or delays caused by post-launch
              changes requested by you.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If you materially change the agreed ICP Matrix, qualification standards, offer, targeting, or scope after
              launch, we may revise campaign expectations, adjust execution, or determine that any setup-fee refund
              eligibility has been voided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Suspension or Termination of Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              This partnership is based on mutual transparency and objective qualification standards.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If meetings are consistently disputed without a valid ICP-based reason, if payment is withheld, if
              chargebacks are initiated in bad faith, or if client-caused interruptions materially interfere with campaign
              delivery, we reserve the right to suspend or terminate services immediately.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Any suspension or termination does not waive your obligation to pay amounts already earned, invoiced,
              charged, or otherwise due under these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">No Guarantee of Sales or Revenue</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We do not guarantee closed deals, revenue, profit, conversion rates, or any minimum number of sales.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Our responsibility is to provide the agreed services and book meetings that match the mutually agreed ICP
              Matrix. Your close rate, sales results, and return on investment depend on many factors outside our control,
              including your offer, pricing, follow-up, market conditions, calendar availability, and sales execution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Payment Enforcement</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You agree not to withhold, offset, reverse, or charge back validly earned fees based on subjective
              disagreement with lead quality where the prospect matched the agreed ICP Matrix or where you failed to timely
              dispute the meeting under Section 6.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Before initiating any bank dispute or chargeback relating to our services, you agree to first use the
              dispute process set out in these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-400">
              These Terms are governed by and construed under the laws of the State of Washington, without regard to
              conflict-of-law principles.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Any dispute arising out of or relating to these Terms or the services will be brought exclusively in the
              state or federal courts located in Washington, and each party consents to the jurisdiction of those courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Entire Agreement</h2>
            <p className="text-gray-600 dark:text-gray-400">
              These Terms, together with any proposal, order form, invoice, onboarding materials, and the mutually agreed
              ICP Matrix, constitute the entire agreement between the parties relating to the services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              If there is a direct conflict between these Terms and a separately signed written agreement between the
              parties, that signed written agreement will control solely to the extent of the conflict.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Website Updates</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update these Terms from time to time by posting the updated version on our website.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              The version of these Terms in effect at the time of your payment will govern your purchase unless otherwise
              expressly agreed by us in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Acceptance by Payment</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Payment for any services constitutes your acceptance of these Terms and creates a binding agreement between
              you and Social Bloom as of the date of payment.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              No signature, click-through acceptance, or other separate action is required for these Terms to become
              enforceable.
            </p>
          </section>
          <p className="mt-12 pt-8 border-gray-200 dark:border-gray-800">
          Updated on April 3rd, 2026
          </p>
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/" className="text-[#e2d42c] font-medium hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  )
}
