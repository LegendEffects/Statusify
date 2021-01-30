'use strict';

import { Builder, component, group } from "../lib/Builder";
import Component, { ComponentCParams } from '../lib/Component/Component'
import ComponentGroup from "../lib/Component/ComponentGroup";


describe('Builder/ComponentBuilder', () => {
    test('Component Builder Builds', () => {
        const attrs = {
            id: 'component-1',
            name: 'Component 1',
            description: 'Test Description'
        }

        
        expect(component(attrs.id).name(attrs.name).description(attrs.description).build()).toStrictEqual(new Component(attrs));
    })

    test('Component Group Builder Builds', () => {
        const builderGroup = new Builder()
            .groups([
                group()
                    .name('group 1')
                    .description('group 1 description')
                    .components([
                        component('component-1')
                            .name('g1-c1')
                            .description('g1-c1 description'),
                        component('component-2')
                            .name('g1-c2')
                    ])
            ])

        const comparisonGroup = new ComponentGroup({name: 'group 1', description: 'group 1 description'});
        comparisonGroup.addComponents([
            new Component({ id: 'component-1', name: 'g1-c1', description: 'g1-c1 description' }),
            new Component({ id: 'component-2', name: 'g1-c2' })
        ])

        expect(builderGroup._groups.map(g => g.build())).toStrictEqual([
            comparisonGroup
        ])
    })
});
