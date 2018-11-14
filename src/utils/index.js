import { HOST } from '../constants';

const formatContractors = (data) => {
    return data.map(contractor => {
        return {
            ...contractor,
            avatar: `${HOST}${contractor.avatar}`
        }
    });
};

const formatBudget = (budget) => {
    const budgetDollars = budget / 100;
    if (budgetDollars < 1) {
        return `$${budgetDollars}`;
    }
    const [dollars, cents] = ('' + budgetDollars).split(".");

    return `$${parseInt(dollars, 10).toLocaleString('en-EN')}.${cents || '00'}`;
};

const formatResponse = ({ data, query }) => {
    const projects = data.map(project => {
        const { contractors, image, budget } = project;

        return {
            ...project,
            contractors: formatContractors(contractors),
            image: `${HOST}${image}`,
            budget: formatBudget(budget)
        }
    });

    return {
        projects,
        query

    };
};

const constructSortQuery = (sortParams) => {
    const result = sortParams.map(({ type, sort }) => {
        const prefix = sort === 'desc' ? '-' : '';
        return `${prefix}${type}`;
    });

    return `?sort=${result.join('&')}`;
};

export {
    formatResponse,
    constructSortQuery
}