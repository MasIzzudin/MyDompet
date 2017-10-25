import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, ListView } from 'react-native';
import { ValueIncome } from '../../Actions';
import { IncomeList } from './IncomeList';

class PageHome extends Component {
    componentWillMount() {
        this.props.ValueIncome();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(NextProps) {
        this.createDataSource(NextProps);
    }

    createDataSource({ IncomeVal }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(IncomeVal);
    }

    renderRow(income) {
        return <IncomeList income={income} />;
    }

    render() {
            const { ContainerStyle } = Style;
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <View style={ContainerStyle}>
                    <ListView 
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        );
    }
}

const Style = {
    ContainerStyle: {
        backgroundColor: 'white',
        width: 290,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const mapStateToProps = state => {
    const IncomeVal = _.map(state.IncomeVal, (val, uid) => {
        return { ...val, uid };
    });
    return { IncomeVal };
};

export default connect(mapStateToProps, { ValueIncome })(PageHome);
