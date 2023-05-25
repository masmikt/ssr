export enum LegalPagesNames {
    Eula = 'eula',
    PrivacyPolicy = 'privacy_policy',
    RefundPolicy = 'refund_policy',
    TermsConditions = 'terms_and_conditions',
}

export const LegalPagesList = [
    {
        name: LegalPagesNames.Eula,
        text: 'EULA',
        link: "https://clario.co/eula"
    },
    {
        name: LegalPagesNames.PrivacyPolicy,
        text: 'Privacy Policy',
        link: "https://clario.co/privacy-policy"
    },
    {
        name: LegalPagesNames.RefundPolicy,
        text: 'Refund Policy',
        link: "https://clario.co/refund-policy"
    },
    {
        name: LegalPagesNames.TermsConditions,
        text: 'Terms and Conditions',
        link: "https://clario.co/terms-and-conditions"
    },
]