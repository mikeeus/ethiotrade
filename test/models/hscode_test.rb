require 'test_helper'

class HscodeTest < ActiveSupport::TestCase

  def setup
    @search_description = HscodeSearch.new('First')
    @search_code = HscodeSearch.new('2000')
    @hscode_first = hscodes(:one)
    @hscode_second = hscodes(:two)
    @hscode_rel = hscodes(:one_rel)
    @hscode_not_rel = hscodes(:one_not_rel)
  end

  test "should search hscodes by name" do
    response = @search_description.search
    assert_equal response[0], @hscode_first
    assert_not_equal response[0], @hscode_second
  end

  test "should search hscodes by code" do
    response = @search_code.search
    assert_not_equal response[0], @hscode_first
    assert_equal response[0], @hscode_second
  end

  test "should return related codes" do
    related = @hscode_first.related_codes
    assert_includes related, @hscode_rel
    assert_not_includes related, @hscode_not_rel
    assert_not_includes related, @hscode_second    
  end

end
