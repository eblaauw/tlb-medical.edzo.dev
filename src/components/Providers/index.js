import React, { Component } from 'react';
import Information from '../../data/data.json'
class Providers extends Component {

    constructor() {
        super();

        this.state = {
            search: null
        };
        this.timeout =  0;
    }

    searchSpace = (event) => {
        var searchText = event.target.value; // this is the search text
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            let keyword = event.target.value;
            this.setState({ search: keyword })
        }, 300);
        
    }

    render() {
        const styleInfo = {
            paddingRight: '10px'
        }
        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10vh',
            height: '3vh',
            width: '20vh',
            marginTop: '5vh',
            marginBottom: '10vh'
        }
        const items = Information.filter((data) => {
            if (this.state.search == null)
                return data
            else if (data.provider_name.toLowerCase().includes(this.state.search.toLowerCase()) || data.provider_type.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {data.provider_name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.provider_type}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.address}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.emirate}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div>
                                <div class="mt-1">
                                    <input onChange={(e) => this.searchSpace(e)} type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter hospital name" />
                                </div>
                            </div>
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
              </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Type
              </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Address
              </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Emirate
              </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Providers;