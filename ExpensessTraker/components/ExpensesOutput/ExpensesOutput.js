
import { FlatList,StyleSheet, View } from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description: 'A pair of shoes',
        amount: 45.99,
        date: new Date('2024-01-08')
    },
    {
        id:'e2',
        description: 'A pair of Shirt',
        amount: 45.99,
        date: new Date('2024-01-10')
    },
    {
        id:'e3',
        description: 'A pair of Pants',
        amount: 45.99,
        date: new Date('2024-01-11')
    },
    {
        id:'e4',
        description: 'Some food',
        amount: 45.99,
        date: new Date('2023-01-11')
    },
    {
        id:'e5',
        description: 'A book ',
        amount: 4.99,
        date: new Date('2023-03-13')
    },
    {
        id:'e6',
        description: 'A pair of shoes',
        amount: 45.99,
        date: new Date('2024-01-08')
    },
    {
        id:'e7',
        description: 'A pair of Shirt',
        amount: 45.99,
        date: new Date('2024-01-10')
    },
    {
        id:'e8',
        description: 'A pair of Pants',
        amount: 45.99,
        date: new Date('2024-01-11')
    },
    {
        id:'e9',
        description: 'Some food',
        amount: 45.99,
        date: new Date('2023-01-11')
    },
    {
        id:'e10',
        description: 'A book ',
        amount: 4.99,
        date: new Date('2023-03-13')
    },
];
 

function ExpensesOutput({expenses, expensesPeriod}){
    return <View style={styles.container}>
     <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
     <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
}


export default ExpensesOutput;

const styles= StyleSheet.create({
    container:{
        paddingHorizontal:24,
        paddingBottom:0,
        paddingTop:'24',
        backgroundColor:'#beecec',
        flex:1,
    }
});