import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment seach-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Video Seach
                        </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;