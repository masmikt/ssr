import TreeDevices from 'public/images/common/pricing/tree-devices.svg';
import AntiSpy from 'public/images/common/pricing/ani-spy.svg';
import UnlimitedAccess from 'public/images/common/pricing/unlim.svg';
import Support from 'public/images/common/pricing/support.svg';

export const OpportunitiesConfig = [
    {
        name: 'protect',
        icon: TreeDevices,
        description: {
            text: 'Protection for 3 devices',
        },
    },
    {
        name: 'anti-spy',
        icon: AntiSpy,
        description: {
            text: 'Anti-spy checkup',
        },
    },
    {
        name: 'unlimited access',
        icon: UnlimitedAccess,
        description: {
            text: 'Unlimited access to anti-spying tools',
        },
    },
    {
        name: 'support',
        icon: Support,
        description: {
            text: '24/7 help from security experts',
        },
    },
]